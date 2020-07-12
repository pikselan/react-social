import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../store/actions/auth";

function Login(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    props.loginUser(userData);
  };

  const isValidForm = (data: any) => {
    if (data) {
      return "is-invalid";
    } else {
      return "";
    }
  };

  const isValidInfo = (data: any) => {
    if (data) {
      return <div className="invalid-feedback mx-3">{data}</div>;
    } else {
      return "";
    }
  };

  return (
    <div className="register container-fluid p-0">
      <div className="d-flex justify-content-start">
        <div className="form bg-white p-4 p-md-5">
          <Link to="/" className="text-dark">
            <h1>Hi</h1>
          </Link>
          <p>Not only say hi, but you have to make connections</p>
          <hr />
          <h3>Log in to your account</h3>
          <form className="row" onSubmit={onSubmit}>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Email address</label>
              <input
                type="email"
                name="email"
                className={`form-control rounded rounded-pill ${isValidForm(
                  props.error.email
                )}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isValidInfo(props.error.email)}
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control rounded rounded-pill ${isValidForm(
                  props.error.password
                )}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isValidInfo(props.error.password)}
            </div>
            <span className="small mx-3">
              <Link to="/">Forgot Password?</Link>
            </span>
            <div className="my-4 d-flex align-items-center flex-wrap">
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

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
