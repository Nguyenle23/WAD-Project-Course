import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import {useState, useContext} from 'react';
import "./user.css";
import Navbar from "../../components/navbar/navbar";
import { AuthContext } from '../../authContext/AuthContext';
import { updateUser } from "../../authContext/apiCall";

export default function User() {
  const location = useLocation();
  const dataUser = location.state.user;
  const [updateUserObject, setUpdateUser] = useState(null);
  
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateUser({ ...dataUser, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(dataUser._id, updateUserObject, dispatch);
    window.location.href="/";
  };

  return (
    <div className="coverContent">
      <Navbar />
      <div className="user">
        <div className="userTitleContainer">
          {/* <h1 className="userTitle">Edit User - <i></i></h1> */}
          {/* <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={dataUser.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
                alt="User avatar"
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{dataUser.fullname || "Full Name"}</span>
                <span className="userShowUserTitle">{dataUser.isAdmin === true ? "Admin" : "Customer"}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{dataUser.gender || "Gender"}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{dataUser.email || "Email"}</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{dataUser.phonenumber || "Phone"}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{dataUser.location || "Location"}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Customer profile</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Gender</label>
                  <select name="gender" id="gender" onChange={handleChange} className="selectInput">
                    {dataUser.gender === 'Male' ? 
                    <>
                      <option value={'Male'}>Male</option> 
                      <option value={'Female'}>Female</option>
                    </>
                    : 
                    <>
                      <option value={'Female'}>Female</option>
                      <option value={'Male'}>Male</option> 
                    </>}
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={dataUser.fullname || "Empty"}
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="fullname"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={dataUser.email || "Empty"}
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={dataUser.phonenumber  || "Empty"}
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="phonenumber"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Location</label>
                  <select name="location" id="location" onChange={handleChange} className="selectInput">
                    <option>Location</option>
                    <option value="Vietnam">VIETNAM</option>
                    <option value="Usa">USA</option>
                    <option value="Japan">JAPAN</option>
                    <option value="Korean">KOREAN</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={dataUser.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
                    alt="User avatar"
                  />
                    <input 
                    type="text" 
                    placeholder="Upload URL image"
                    onChange={handleChange}
                    name="avatar"
                    className="uploadInput"
                  />
                </div>
                <button className="userUpdateBtn" onClick={handleSubmit}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
