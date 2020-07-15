import React from "react";
import { Link } from "react-router-dom";

export default function Trending(props: any) {
  return (
    <div className="trending col-3 d-none d-md-block">
      <h1 className="h6 text-center">Trending</h1>
      <ul className="list-group small">
        {props.tags.map((item: any, index: any) => {
          return (
            <li className="list-group-item" key={index}>
              <Link to={`/${item.tag}`}>{item.tag}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
