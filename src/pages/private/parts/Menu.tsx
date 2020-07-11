import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu col-3 d-none d-md-block">
      <div className="">
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/80x80?text=Profile"
            className="rounded-circle mr-3"
            alt=""
          />
          <div className="d-flex align-items-start flex-column">
            <h1 className="h5">Tiki God In Your Heart</h1>
            <span className="small font-weight-light">@tikigod</span>
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-primary rounded-pill mb-4 mt-3">
        Post a status
      </Link>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/explorer">Explore</Link>
        </li>
        <li className="list-group-item">
          <Link to="/messages">Messages</Link>
        </li>
        <li className="list-group-item">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
