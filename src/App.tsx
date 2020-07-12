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
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    store.dispatch(setCurrentUser({}));
    window.location.href = "./login";
  }
}

function App(props: any) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            props.auth.isAuthenticated === true ? (
              <Home {...props} logoutUser={logoutUser()} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            props.auth.isAuthenticated === true ? (
              <Redirect to="/" />
            ) : (
              <Login {...props} />
            )
          }
        />
        <Route
          path="/register"
          render={() =>
            props.auth.isAuthenticated === true ? (
              <Redirect to="/" />
            ) : (
              <Register {...props} />
            )
          }
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
