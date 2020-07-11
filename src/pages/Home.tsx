import React from "react";

export default function Home() {
  return (
    <div className="page container-fluid">
      <div className="container-fluid fixed-top border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light justify-content-between">
            <div className="brand">
              <a className="h1 navbar-brand" href="/">
                Hi
              </a>
            </div>
            <div className="search">
              <input
                className="form-control rounded rounded-pill border border-secondary"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="menu">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Notification
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <section className="container mt-5 pt-5">
        <div className="d-flex justify-content-between">
          <div className="col-3 border">List</div>
          <div className="col-2 border">Save</div>
          <div className="col-6 border">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x400?text=Image+Posting"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
