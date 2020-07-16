import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";
import { Button } from "../../../components/Link";

export default function Post(props: any) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await axios
      .get("/users/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  const postComment = async (e: any) => {
    e.preventDefault();
    const commentData = {
      postId: e.target.id.value,
      text: e.target.comment.value,
    };

    e.target.comment.value = "";
    await axios
      .post("/users/comment", commentData)
      .then((res) => {
        console.log(`comment sent: ${new Date()}`);
      })
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
    getAllPosts();
  };

  const postStatus = async (e: any) => {
    e.preventDefault();

    const statusData = {
      text: e.target.status.value,
    };

    e.target.status.value = "";
    e.target.status.rows = 1;
    await axios
      .post("/users/post", statusData)
      .then((res) => {
        console.log(`status update: ${new Date()}`);
      })
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
    getAllPosts();
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="status col-md-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={postStatus}>
            <textarea
              className={`form-control mt-3`}
              rows={1}
              style={{ resize: "none" }}
              name="status"
              onFocus={(e) => (e.target.rows = 3)}
              placeholder="Post a status"
            ></textarea>
            {/* <div className="form-file form-file-sm mt-2">
              <Button className="btn-secondary btn-sm">Add Image</Button>
              <input
                type="file"
                className="form-file-input"
                id="customFileSm"
              />
              <label className="form-file-label" htmlFor="customFileSm">
                <span className="form-file-text">Add image</span>
                <span className="form-file-button">Browse</span>
              </label>
            </div> */}
            <Button type="submit" className="btn-primary btn-sm mt-3 mr-3">
              Post a status
            </Button>
          </form>
        </div>
      </div>
      {posts.map((item: any, index: any) => {
        return (
          <div className="card" key={index}>
            <div className="card-header bg-white d-flex align-items-center">
              <img
                src={item.userId.photo}
                className="rounded-circle mr-3"
                alt=""
              />
              <div className="d-flex align-items-start flex-column">
                <h6 className="m-0">{item.userId.name}</h6>
                <span className="small">
                  <TimeAgo date={item.created_at} />
                </span>
              </div>
            </div>
            <img src={item.image} className="card-img-top rounded-0" alt="" />
            <div className="card-body">
              <span className="card-text">
                <div className="post">
                  <Link className="font-weight-bold" to="/">
                    @{item.userId.username}
                  </Link>
                  {item.text.replace(/(#)\w+/g, (i: any) => ` ${i} `)}
                </div>
                <div className="comment pl-3 small">
                  {item.comments.map((item: any, index: any) => {
                    return (
                      <div className="comment-item mt-1" key={index}>
                        <Link className="" to="/">
                          @{item.userId.username}
                        </Link>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
                <div className="input-comment mt-3">
                  <form onSubmit={postComment}>
                    <input
                      type="text"
                      placeholder="Comment"
                      name="id"
                      value={item._id}
                      onChange={(e) => e.preventDefault()}
                      required
                      hidden
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Add Comment"
                      name="comment"
                      onChange={(e) => e.target.value}
                      required
                    />
                    <input type="submit" hidden />
                  </form>
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
