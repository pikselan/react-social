import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../utils/history";

import { connect } from "react-redux";
import { registerUser } from "../store/actions/auth";

function Register(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      passwordConfirm,
    };

    props.registerUser(userData, history);
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
          <h3>Create your account</h3>
          <form className="row" onSubmit={onSubmit}>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control rounded rounded-pill ${isValidForm(
                  props.error.name
                )}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {isValidInfo(props.error.name)}
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Email address</label>
              <input
                type="email"
                name="name"
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
            <div className="my-2">
              <label className="form-label my-0 mx-3">
                Password confirmation
              </label>
              <input
                type="password"
                name="passwordConfirm"
                className={`form-control rounded rounded-pill ${isValidForm(
                  props.error.passwordConfirm
                )}`}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              {isValidInfo(props.error.passwordConfirm)}
            </div>
            <div className="my-2 d-flex align-items-center flex-wrap">
              <button
                type="submit"
                className="btn btn-primary mr-2 mb-2 rounded rounded-pill"
              >
                Sign up
              </button>
              <div className="d-flex flex-wrap mb-2">
                Have an account?
                <Link to="/login" className="ml-1">
                  Log in now
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

export default connect(mapStateToProps, { registerUser })(Register);
