import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";

export default function Trending(props: any) {
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    await axios
      .get("/users/tag")
      .then((res) => setTags(res.data))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="trending col-3 d-none d-md-block">
      <h1 className="h6 text-center">Trending</h1>
      <ul className="list-group small">
        {tags.map((item: any, index: any) => {
          return (
            <li className="list-group-item" key={index}>
              <Link
                to={`/tag/${item.tag.replace(/(#)/g, "")}`}
                className="d-block"
              >
                {item.tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
