import React from "react";

export default function Home() {
  return (
    <div className="page container-fluid">
      <div className="container-fluid fixed-top border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light bg-white justify-content-between">
            <div className="brand">
              <a className="h1 navbar-brand" href="/">
                Hi
              </a>
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Notification
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <section className="main container mt-5 pt-5">
        <div className="d-flex justify-content-between">
          <div className="menu col-3">
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
            <a href="/" className="btn btn-dark rounded-pill mb-4 mt-3">
              Post a status
            </a>
            <ul className="list-group">
              <li className="list-group-item">Explore</li>
              <li className="list-group-item">Messages</li>
              <li className="list-group-item">Settings</li>
            </ul>
          </div>
          <div className="status col-5">
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
                    <a className="" href="/">
                      @gorgon
                    </a>
                    i believe cat from messir, because all of god in there is
                    cat. haha
                  </div>
                  <div className="comment pl-3 small">
                    <div className="comment-item">
                      <a className="" href="/">
                        @sphinx
                      </a>
                      thats not true
                    </div>
                    <div className="comment-item">
                      <a className="" href="/">
                        @tikigod
                      </a>
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
                    <a className="" href="/">
                      @sphinx
                    </a>
                    i bored, everywhere sand sand and sand
                  </div>
                  <div className="comment pl-3 small">
                    <div className="comment-item">
                      <a className="" href="/">
                        @gorgon
                      </a>
                      you can swim in seand. haha
                    </div>
                    <div className="comment-item">
                      <a className="" href="/">
                        @tikigod
                      </a>
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
                    <a className="" href="/">
                      @tikigod
                    </a>
                    mening sevgimni do'stim oldi
                  </div>
                  <div className="comment pl-3 small">
                    <div className="comment-item">
                      <a className="" href="/">
                        @sphinx
                      </a>
                      Men hali ham Seni sevaman
                    </div>
                    <div className="comment-item">
                      <a className="" href="/">
                        @tikigod
                      </a>
                      jirkanch
                    </div>
                    <div className="comment-item">
                      <a className="" href="/">
                        @gorgon
                      </a>
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
          <div className="trending col-3">
            <h1 className="h6 text-center">Trending</h1>
            <ul className="list-group small">
              <li className="list-group-item">
                <a href="/">#savetheworld</a>
              </li>
              <li className="list-group-item">
                <a href="/">#developerishumantoo</a>
              </li>
              <li className="list-group-item">
                <a href="/">#iloveindomie</a>
              </li>
              <li className="list-group-item">
                <a href="/">#catorange</a>
              </li>
              <li className="list-group-item">
                <a href="/">#catbullying</a>
              </li>
              <li className="list-group-item">
                <a href="/">#midermider</a>
              </li>
              <li className="list-group-item">
                <a href="/">#boikotflatearth</a>
              </li>
              <li className="list-group-item">
                <a href="/">#whenyougetold</a>
              </li>
              <li className="list-group-item">
                <a href="/">#teacherishero</a>
              </li>
              <li className="list-group-item">
                <a href="/">#akuingincepatkayajgganteng</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
