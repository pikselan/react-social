import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="status col-md-5">
      <div className="card">
        <div className="card-header bg-white d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50x50?text=Profile"
            className="rounded-circle mr-3"
            alt=""
          />
          <div className="d-flex align-items-start flex-column">
            <h1 className="h6 m-0">Gorgon bcd sia</h1>
            <span className="small font-weight-light">1 hours ago</span>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400x400?text=Image+Posting"
          className="card-img-top rounded-0"
          alt=""
        />
        <div className="card-body">
          <span className="card-text">
            <div className="post">
              <Link className="" to="/">
                @gorgon
              </Link>
              i believe cat from messir, because all of god in there is cat.
              haha
            </div>
            <div className="comment pl-3 small">
              <div className="comment-item">
                <Link className="" to="/">
                  @sphinx
                </Link>
                thats not true
              </div>
              <div className="comment-item">
                <Link className="" to="/">
                  @tikigod
                </Link>
                faqat odamni kaltaklang
              </div>
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
      <div className="card">
        <div className="card-header bg-white d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50x50?text=Profile"
            className="rounded-circle mr-3"
            alt=""
          />
          <div className="d-flex align-items-start flex-column">
            <h1 className="h6 m-0">Sphinx Kitty</h1>
            <span className="small font-weight-light">2 hours ago</span>
          </div>
        </div>
        <div className="card-body">
          <span className="card-text">
            <div className="post">
              <Link className="" to="/">
                @sphinx
              </Link>
              i bored, everywhere sand sand and sand
            </div>
            <div className="comment pl-3 small">
              <div className="comment-item">
                <Link className="" to="/">
                  @gorgon
                </Link>
                you can swim in seand. haha
              </div>
              <div className="comment-item">
                <Link className="" to="/">
                  @tikigod
                </Link>
                sen befoyda do'stsan
              </div>
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
      <div className="card">
        <div className="card-header bg-white d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50x50?text=Profile"
            className="rounded-circle mr-3"
            alt=""
          />
          <div className="d-flex align-items-start flex-column">
            <h1 className="h6 m-0">Tiki God In Your Heart</h1>
            <span className="small font-weight-light">3 hours ago</span>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400x400?text=Image+Posting"
          className="card-img-top rounded-0"
          alt=""
        />
        <div className="card-body">
          <span className="card-text">
            <div className="post">
              <Link className="" to="/">
                @tikigod
              </Link>
              mening sevgimni do'stim oldi
            </div>
            <div className="comment pl-3 small">
              <div className="comment-item">
                <Link className="" to="/">
                  @sphinx
                </Link>
                Men hali ham Seni sevaman
              </div>
              <div className="comment-item">
                <Link className="" to="/">
                  @tikigod
                </Link>
                jirkanch
              </div>
              <div className="comment-item">
                <Link className="" to="/">
                  @gorgon
                </Link>
                g'ayritabiiy
              </div>
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
    </div>
  );
}
