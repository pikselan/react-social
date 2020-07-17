import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";
import { Button } from "../../../components/Link";
import imageCompression from "browser-image-compression";

export default function Post(props: any) {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const getAllPosts = async () => {
    await axios
      .get("/users/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
  };

  const postComment = async (e: any) => {
    e.preventDefault();
    const commentData = {
      postId: e.target.id.value,
      text: e.target.comment.value,
    };

    e.target.comment.value = "";
    await axios
      .post("/users/comment", commentData)
      .then((res) => {
        console.log(
          `comment sent: ${res.status} : ${res.statusText} : ${new Date()}`
        );
      })
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
    getAllPosts();
  };

  const postStatus = async (e: any) => {
    e.preventDefault();

    const tags = e.target.status.value.match(/(#)\w+/g) || [];

    const formData = new FormData();
    formData.set("text", e.target.status.value);
    formData.set("tags", tags);
    formData.append("image", image.raw);

    e.target.status.value = "";
    e.target.status.rows = 1;
    setImage({ preview: "", raw: "" });

    await axios
      .post("/users/post", formData, {
        headers: { "content-type": `multipart/form-data` },
      })
      .then((res) => {
        console.log(
          `status update: ${res.status} : ${res.statusText} : ${new Date()}`
        );
      })
      .catch((err) => {
        toast.dark("Network unavailable, try again");
      });
    getAllPosts();
  };

  const handleImageCompressed = (preview: any, raw: any) => {
    setImage({
      preview,
      raw,
    });
  };

  const handleImage = async (e: any) => {
    if (e.target.files[0]) {
      const imageFile = e.target.files[0];

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);

        let fileImage = new File(
          [compressedFile],
          `${Date.now()}_${Math.random().toString(36).substr(2)}.jpg`
        );

        handleImageCompressed(URL.createObjectURL(compressedFile), fileImage);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="status col-md-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={postStatus}>
            <textarea
              className={`form-control mt-3`}
              rows={1}
              style={{ resize: "none" }}
              name="status"
              onFocus={(e) => (e.target.rows = 3)}
              placeholder="Post a status"
            ></textarea>

            <div className="image-upload mt-2">
              {image.preview !== "" ? (
                <img className="rounded w-100" src={image.preview} alt="" />
              ) : (
                ""
              )}
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H14.09C14.03 20.67 14 20.34 14 20C14 19.32 14.12 18.64 14.35 18H5L8.5 13.5L11 16.5L14.5 12L16.73 14.97C17.7 14.34 18.84 14 20 14C20.34 14 20.67 14.03 21 14.09V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM19 16V19H16V21H19V24H21V21H24V19H21V16H19Z"
                    fill="grey"
                  />
                </svg>
              </label>
              <input
                id="file-input"
                className="d-none"
                type="file"
                accept="image/*"
                // accept=".png,.jpg.,.jpeg"
                onChange={handleImage}
              />
            </div>
            <Button type="submit" className="btn-primary btn-sm mt-3 mr-3">
              Post a status
            </Button>
          </form>
        </div>
      </div>
      {posts.map((item: any, index: any) => {
        return (
          <div className="card" key={index}>
            <div className="card-header bg-white d-flex align-items-center">
              <img
                src={item.userId.photo}
                className="rounded-circle mr-3"
                alt=""
              />
              <div className="d-flex align-items-start flex-column">
                <h6 className="m-0">{item.userId.name}</h6>
                <span className="small">
                  <TimeAgo date={item.created_at} />
                </span>
              </div>
            </div>
            {item.image ? (
              <img
                src={`${process.env.REACT_APP_HOST}/${item.image}`}
                className="card-img-top rounded-0"
                alt=""
              />
            ) : (
              ""
            )}
            <div className="card-body">
              <span className="card-text">
                <div className="post">
                  <Link className="font-weight-bold" to="/">
                    @{item.userId.username}
                  </Link>
                  {item.text.replace(/(#)\w+/g, (i: any) => ` ${i} `)}
                </div>
                <div className="comment pl-3 small">
                  {item.comments.map((item: any, index: any) => {
                    return (
                      <div className="comment-item mt-1" key={index}>
                        <Link className="" to="/">
                          @{item.userId.username}
                        </Link>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
                <div className="input-comment mt-3">
                  <form onSubmit={postComment}>
                    <input
                      type="text"
                      placeholder="Comment"
                      name="id"
                      value={item._id}
                      onChange={(e) => e.preventDefault()}
                      required
                      hidden
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Add Comment"
                      name="comment"
                      onChange={(e) => e.target.value}
                      required
                    />
                    <input type="submit" hidden />
                  </form>
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
