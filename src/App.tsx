import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";

import Home from "./pages/private/Home";
import Tag from "./pages/private/Tag";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/auth";
import { setCurrentUser, logoutUser } from "./store/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function App(props: any) {
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded: any = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        history.push("/login");
      }
    }
  }, []);

  const isAuthenticated = (componentTrue: any, componentFalse: any) => {
    return props.auth.isAuthenticated === true ? componentTrue : componentFalse;
  };

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated(<Home {...props} />, <Redirect to="/login" />)
          }
        />
        <Route
          path="/tag"
          render={() =>
            isAuthenticated(<Tag {...props} />, <Redirect to="/login" />)
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
