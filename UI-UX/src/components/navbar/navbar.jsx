import { ArrowDropDown, Search } from '@material-ui/icons';
import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../../authContext/AuthAction";
import './navbar.scss';
import { AuthContext } from '../../authContext/AuthContext';
import SearchNav from '../../components/search/search';
import { searchMovie } from '../../actions/index';

export default function Navbar({ childToParent }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const handleSearchChange = (newSearch) => {
    searchMovie(newSearch)
      .then((res) => {
        childToParent(res.data);
      })
  }

  const handleLogout = () => {
    dispatch(logout());
    window.location.href="/login";
  }

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
            <div className="search">
              {isOpen ? (
                // <input 
                //   type="text" 
                //   placeholder="Search" 
                //   className="searchInput" 
                //   value={keyword}  
                //   onChange={handleInputChange}
                // />
                <SearchNav onSubmit={handleSearchChange} />
              ) : (
                ''
              )}
              <Search className="icon" onClick={() => setIsOpen(!isOpen)}/>
            </div>
            {/* <span>KID</span>
            <Notifications className="icon" /> */}
            <img src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" />  
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>
                  <Link to={{pathname: "/user/" + user._id}} state={{ user }}>
                    Profile
                  </Link>
                </span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

