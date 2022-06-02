import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {getUser} from '../../actions/index';
import {UserContext} from '../../context/userContext/UserContext'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  const { users } = useContext(UserContext);

  useEffect(() => {
      try {
        getUser()
          .then((res) => {
            setNewUsers(res.data)
          });
      } catch (err) {
        console.log(err);
      }
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
        <li key={user._id} className="widgetSmListItem">
          <img 
            src={
              user.avatar ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.email || 'Email' }</span>
            <span className="widgetSmUsername">{user.fullname || 'Fullname'}</span>
            <span className="widgetSmUserTitle">{user.joinDate || 'Joinning time'}</span>
          </div>
          <Link to={{pathname: "/user/" + users._id, users: users}}>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}
