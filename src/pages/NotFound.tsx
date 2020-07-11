import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className=" container-fluid p-0">
      <div className="d-flex justify-content-center">
        <div className="form bg-white p-4 p-md-5 text-center">
          <h1>Hi human</h1>
          <h2>Sorry, your URL not found</h2>
          <Link to="/" className="btn btn-secondary m-3">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
