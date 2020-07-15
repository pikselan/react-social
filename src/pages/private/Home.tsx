import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Menu from "./parts/Menu";
import Post from "./parts/Post";
import Trending from "./parts/Trending";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

import { connect } from "react-redux";

function Home(props: any) {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);

  const getTags = async () => {
    await axios
      .get("/users/tag")
      .then((res) => setTags(res.data))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  const getPosts = async () => {
    await axios
      .get("/users/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  useEffect(() => {
    getTags();
    getPosts();
  }, []);

  return (
    <div className="page container-fluid p-0">
      <Navbar />
      <section className="main container mt-5 pt-3 pt-md-5 px-2 mb-5 mb-md-1">
        <div className="d-flex justify-content-between">
          <Menu {...props} />
          <Post />
          <Trending tags={tags} />
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
