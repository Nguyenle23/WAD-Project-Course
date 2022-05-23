import React, {useState, useEffect} from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {getUser} from '../../actions/index';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

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
              user.profilePic ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
