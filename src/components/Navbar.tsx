import React from "react";
import { Link } from "react-router-dom";

import icHome from "../assets/images/ic-home.svg";
import icExplore from "../assets/images/ic-explore.svg";
import icAdd from "../assets/images/ic-add.svg";
import icNotif from "../assets/images/ic-notif.svg";
import icProfile from "../assets/images/ic-profile.svg";

import { connect } from "react-redux";
import { logoutUser } from "../store/actions/auth";

function Navbar(props: any) {
  const logoutHandle = (e: any) => {
    e.preventDefault();
    props.logoutUser();
  };
  return (
    <>
      <div className="container-fluid fixed-top border-bottom bg-white d-none d-md-block">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light justify-content-between">
            <div className="brand">
              <Link className="h1 navbar-brand" to="/">
                Hi
              </Link>
            </div>
            <div className="search">
              <input
                className="form-control rounded-pill border border-secondary"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="menu">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <img src={icHome} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <img src={icNotif} alt="" />
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={icProfile} alt="" />
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Security
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/login"
                        onClick={logoutHandle}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid fixed-top border-bottom d-block d-md-none bg-white">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light justify-content-center">
            <h6 className="h1 navbar-brand text-center m-1">Hi</h6>
          </nav>
        </div>
      </div>
      <div className="container-fluid fixed-bottom border-top d-block d-md-none bg-white">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light">
            <div className="menu-mobile">
              <ul className="navbar-nav justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <img src={icHome} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/explore">
                    <img src={icExplore} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <img src={icAdd} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/notif">
                    <img src={icNotif} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/profile">
                    <img src={icProfile} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
