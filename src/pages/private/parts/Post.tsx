import React from "react";
import { Link } from "react-router-dom";

export default function Post(props: any) {
  return (
    <div className="status col-md-5">
      {props.posts.map((item: any, index: any) => {
        return (
          <div className="card" key={index}>
            <div className="card-header bg-white d-flex align-items-center">
              <img
                src={item.userId.photo}
                className="rounded-circle mr-3"
                alt=""
              />
              <div className="d-flex align-items-start flex-column">
                <h1 className="h6 m-0">{item.userId.name}</h1>
                <span className="small font-weight-light">
                  {item.updatedAt}
                </span>
              </div>
            </div>
            <img src={item.image} className="card-img-top rounded-0" alt="" />
            <div className="card-body">
              <span className="card-text">
                <div className="post">
                  <Link className="" to="/">
                    @{item.userId.username}
                  </Link>
                  {item.text}
                </div>
                <div className="comment pl-3 small">
                  {item.comments.map((item: any, index: any) => {
                    return (
                      <div className="comment-item">
                        <Link className="" to="/">
                          @{item.userId.username}
                        </Link>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
                <div className="input-comment mt-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Comment"
                  />
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
