import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Menu from "./parts/Menu";
import PostProfile from "./parts/PostProfile";
import Trending from "./parts/Trending";

import { connect } from "react-redux";

function Profile(props: any) {
  let match = useRouteMatch();

  return (
    <div className="page container-fluid p-0">
      <Navbar />
      <section className="main container mt-5 pt-3 pt-md-5 px-2 mb-5 mb-md-1">
        <div className="d-flex justify-content-between">
          <Menu {...props} />
          <Switch>
            <Route path={`${match.path}/:userParam`}>
              <PostProfile />
            </Route>
            <Route path={match.path}>
              <h1>User not found</h1>
            </Route>
          </Switch>
          <Trending />
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, {})(Profile);
