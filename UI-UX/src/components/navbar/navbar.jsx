import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../../authContext/AuthAction";
import './navbar.scss';
import {AuthContext} from '../../authContext/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbarNetflix scrolled" : "navbarNetflix"}>
        <div className="containerNetflix">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            ></img>
            <Link to="/" onClick={() => window.location.href="/"} className="link">
            <span>Homepage</span>
            </Link>
            <Link to="/series" onClick={() => window.location.href="/series"} className="link">
            <span>Series</span>
            </Link>
            <Link to="/movies" onClick={() => window.location.href="/movies"} className="link">
            <span>Movies</span>
            </Link>
            <Link to="/newandtrending" onClick={() => window.location.href="/newandtrending"} className="link">
            <span>New and Popular </span>
            </Link>
          </div>
          <div className="right">
            <Search className="icon" />
            {/* <span>KID</span>
            <Notifications className="icon" /> */}
            <Link to={{pathname: "/user/" + user._id, users: user}}>
              <img src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" />  
            </Link>
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span onClick={() => dispatch(logout())}>Logout</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
