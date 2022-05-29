import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthAction";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to={`/`}>
            <span className="logo">Netflix</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          
          <div className="dropdownProfile">
            <Link to={{pathname: "/user/" + user._id, users: user}}>
              <img src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="topAvatar" />
            </Link>
            <div class="dropdownContent">
              <div className="settingIcon">
                <Settings />
              </div>
              <div className="dropdownLogout">
                <span onClick={() => dispatch(logout())}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
