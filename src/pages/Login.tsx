import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="register container-fluid p-0">
      <div className="d-flex justify-content-start">
        <div className="form bg-white p-4 p-md-5">
          <h1>Hi</h1>
          <p>Not only say hi, but you have to make connections</p>
          <hr />
          <h3>Log in to your account</h3>
          <form className="row">
            <div className="my-2">
              <label className="form-label my-0 mx-3">Email address</label>
              <input
                type="email"
                className="form-control rounded rounded-pill"
              />
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Password</label>
              <input
                type="password"
                className="form-control rounded rounded-pill"
              />
              <span className="small mx-3">
                <a href="/">Forgot Password?</a>
              </span>
            </div>
            <div className="my-2 d-flex align-items-center flex-wrap">
              <button
                type="submit"
                className="btn btn-primary mr-2 mb-2 rounded rounded-pill"
              >
                Login
              </button>
              <div className="d-flex flex-wrap mb-2">
                Don't have an account?
                <Link to="/register" className="ml-1">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}