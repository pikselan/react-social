import React from "react";
import { Link } from "react-router-dom";

export default function Trending() {
  return (
    <div className="trending col-3 d-none d-md-block">
      <h1 className="h6 text-center">Trending</h1>
      <ul className="list-group small">
        <li className="list-group-item">
          <Link to="/">#savetheworld</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#developerishumantoo</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#iloveindomie</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#catorange</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#catbullying</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#midermider</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#boikotflatearth</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#whenyougetold</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#teacherishero</Link>
        </li>
        <li className="list-group-item">
          <Link to="/">#akuingincepatkayajgganteng</Link>
        </li>
      </ul>
    </div>
  );
}
