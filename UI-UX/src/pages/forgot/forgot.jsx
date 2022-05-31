import { useState } from "react";

import './forgot.scss';
import { resetPassword } from "../../actions/index";

export default function Forgot() {
  const [resetPass, setResetPass] = useState("");
  const [sendStatus, setSendStatus] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length < 8) {
      setSendStatus("Password must be at least 8 characters");
    } else {
      setResetPass({ ...resetPass, [e.target.name]: value });
    }
  };

  var id = JSON.parse(localStorage.getItem("data")).id

  const handleForgot = (e) => {
    e.preventDefault();
    resetPassword(id,resetPass)
      .then(res => {
      if (res.status === "success") {
        setSendStatus(res.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    })
  };

  return (
    <div className="loginForm">
      <div className="headerLogin">
        <div className="wrapperLogin">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="containerLogin">
        <form className="formLogin">
          <h1 style={{ fontSize: '30px', textAlign: 'center', marginBottom: '-20px' }}>Reset Password</h1>
          {sendStatus ? <p className="status">{sendStatus}</p> : null}
          <input
            className="inputLogin"
            type="password"
            placeholder="New password"
            onChange={handleChange}
            name="password"
          />
          <button className="sendBtn" onClick={handleForgot}>
            Reset
          </button>
          <small className="policy">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
