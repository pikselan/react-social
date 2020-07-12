import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../store/actions/auth";

export default function Register(props: any) {
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
    registerUser(userData, props.history);
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
          <form className="row">
            <div className="my-2">
              <label className="form-label my-0 mx-3">Name</label>
              <input
                type="text"
                name="name"
                className="form-control rounded rounded-pill"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Email address</label>
              <input
                type="email"
                name="name"
                className="form-control rounded rounded-pill"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded rounded-pill"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label className="form-label my-0 mx-3">
                Password confirmation
              </label>
              <input
                type="password"
                name="passwordConfirm"
                className="form-control rounded rounded-pill"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <div className="my-2 d-flex align-items-center flex-wrap">
              <button
                type="submit"
                className="btn btn-primary mr-2 mb-2 rounded rounded-pill"
                onClick={onSubmit}
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
