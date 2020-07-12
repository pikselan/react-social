import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./pages/private/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/auth";
import { setCurrentUser, logoutUser } from "./store/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;

  setAuthToken(token);

  const decoded: any = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App(props: any) {
  const isAuthenticated = (componentTrue: any, componentFalse: any) => {
    return props.auth.isAuthenticated === true ? componentTrue : componentFalse;
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated(<Home {...props} />, <Redirect to="/login" />)
          }
        />
        <Route
          path="/login"
          render={() => isAuthenticated(<Redirect to="/" />, <Login />)}
        />
        <Route
          path="/register"
          render={() => isAuthenticated(<Redirect to="/" />, <Register />)}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
