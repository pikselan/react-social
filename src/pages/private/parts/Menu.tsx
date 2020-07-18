import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../components/Link";

export default function Menu(props: any) {
  // const [showStatus, setShowStatus] = useState(false);
  // const clickToShowStatus = () => {
  //   setShowStatus(!showStatus);
  // };
  const user = props.auth.user.user;
  return (
    <div className="menu col-3 d-none d-md-block">
      <div className="">
        <div className="d-flex align-items-center flex-wrap">
          <img src={user.photo} className="rounded-circle mr-3 mb-2" alt="" />
          <div className="d-flex align-items-start flex-column flex-wrap">
            <User href={user.username} className="h5" isName>
              {user.name}
            </User>
            <span className="small font-weight-light text-truncate w-100">
              <User href={user.username} />
            </span>
            <span className="mt-2">
              Bio:
              <p>{user.bio}</p>
            </span>
          </div>
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/explorer">Profile</Link>
        </li>
        <li className="list-group-item">
          <Link to="/messages">Messages</Link>
        </li>
        <li className="list-group-item">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
