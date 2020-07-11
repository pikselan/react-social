import React from "react";
import Navbar from "../../components/Navbar";
import Menu from "./parts/Menu";
import Post from "./parts/Post";
import Trending from "./parts/Trending";

export default function Home() {
  return (
    <div className="page container-fluid p-0">
      <Navbar />
      <section className="main container mt-5 pt-3 pt-md-5 px-2 mb-5 mb-md-1">
        <div className="d-flex justify-content-between">
          <Menu />
          <Post />
          <Trending />
        </div>
      </section>
    </div>
  );
}
