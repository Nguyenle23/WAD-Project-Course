import React, {useState, useEffect} from "react";

import "./widgetLg.css";
import {getUser} from '../../actions/index';

export default function WidgetLg() {

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

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Register Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {newUsers.map((user) => (
          <tr key={user._id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={user.avatar ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{user.email || "Email"}</span>
            </td>
            <td className="widgetLgDate">{user.joinDate || "Time register"}</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}