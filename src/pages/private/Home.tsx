import React from "react";
import Navbar from "../../components/Navbar";
import Menu from "./parts/Menu";
import Post from "./parts/Post";
import Trending from "./parts/Trending";

import { connect } from "react-redux";

function Home(props: any) {
  return (
    <div className="page container-fluid p-0">
      <Navbar />
      <section className="main container mt-5 pt-3 pt-md-5 px-2 mb-5 mb-md-1">
        <div className="d-flex justify-content-between">
          <Menu {...props} />
          <Post />
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

export default connect(mapStateToProps, {})(Home);
