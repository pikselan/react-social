import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TimeAgo from "react-timeago";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";
import { Button } from "../../../components/Link";

export default function PostProfile(props: any) {
  const { userParam } = useParams();
  const [posts, setPosts] = useState<any>([]);
  const [nextPage, setNextPage] = useState(2);
  const [totalPost, setTotalPost] = useState(0);

  const getAllPostUser = async (e: any) => {
    await axios
      .get(`/users/post/${e}`)
      .then((res) => setPosts(res.data.docs))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  const loadMore = async () => {
    await axios
      .get(`/users/post/${nextPage}`)
      .then((res) => {
        setPosts(posts.concat(res.data.docs));
        setTotalPost(res.data.totalDocs);
        setNextPage(nextPage + 1);
      })
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
        console.log(
          `comment sent: ${res.status} : ${res.statusText} : ${new Date()}`
        );
      })
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
    getAllPostUser(userParam);
  };

  useEffect(() => {
    getAllPostUser(userParam);
  }, [userParam]);

  return (
    <div className="status col-md-5">
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
            {item.image ? (
              <img
                src={`${process.env.REACT_APP_HOST}/${item.image}`}
                className="card-img-top rounded-0"
                alt=""
              />
            ) : (
              ""
            )}
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

                  <div className="comment-item mt-1">
                    {item.commentCount > 5 ? (
                      <Link
                        className="font-weight-bold"
                        to={`/user/${item.userId.username}/${item._id}`}
                      >
                        More...
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
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
      {posts.length < totalPost ? (
        <div className="w-100 mb-5 text-center">
          <Button className="btn-primary" onClick={loadMore}>
            Load More
          </Button>
        </div>
      ) : (
        <div className="w-100 mb-5 pt-3 text-center border-top text-secondary font-weight-bold">
          End
        </div>
      )}
    </div>
  );
}
