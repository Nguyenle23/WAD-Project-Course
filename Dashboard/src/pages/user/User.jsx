import {
  AssignmentTurnedInOutlined,
  AttachMoney,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import {useState, useContext} from 'react';
import "./user.css";
import { UserContext } from "../../context/userContext/UserContext";
// import { updateUser } from "../../context/userContext/apiCall";
import { upgradeUser } from "../../actions/index";

export default function User() {
  const location = useLocation();
  const user = location.users;
  const [updateUserObject, setUpdateUser] = useState(null);
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const getToken = JSON.parse(localStorage.getItem("user")).accessToken
    const value = e.target.value;
    setUpdateUser({...updateUserObject, [e.target.name]: value, accessToken: getToken});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    upgradeUser(user._id, updateUserObject, dispatch);
    window.location.href="/users";
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        {/* <h1 className="userTitle">Edit User - </h1> */}
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.fullname || "Full Name"}</span>
              <span className="userShowUserTitle">{user.isAdmin === true ? "Admin" : "Customer"}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <AssignmentTurnedInOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">Is active: {user.isActive === true ? "Yes" : "No"}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Renewal date: {user.beginDate || "Begin Date: None"}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Expired date: {user.expiredDate || "Expired Date: None"}</span>
            </div>
            <div className="userShowInfo">
              <AttachMoney className="userShowIcon" />
              <span className="userShowInfoTitle">Total price: {user.price || "Total prrice: None"} VNĐ</span>
            </div>
            <span className="userShowTitle">Contact Details
            </span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Gender: {user.gender || "Gender: None"}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">Phone: {user.phonenumber || "Phone: None"}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Email: {user.email || "Email: None"}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Region: {user.location || "Location: None"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Profile - <i>{user._id || "User_Id"}</i></span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Is Admin</label>
                <select name="isAdmin" id="isAdmin" onChange={handleChange} >
                  {user.isAdmin === true ? 
                  <>
                    <option value={true}>Yes</option> 
                    <option value={false}>No</option>
                  </>
                  : 
                  <>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option> 
                  </>}
                </select>
              </div>
              <div className="userUpdateItem">
                <label>Gender</label>
                <select name="gender" id="gender" onChange={handleChange} >
                  {user.gender === 'Male' ? 
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
                  placeholder={user.fullname || "Empty"}
                  className="userUpdateInput"
                  onChange={handleChange}
                  name="fullname"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email || "Empty"}
                  className="userUpdateInput"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={user.phonenumber || "Empty"}
                  className="userUpdateInput"
                  onChange={handleChange}
                  name="phonenumber"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <select name="location" id="location" onChange={handleChange} placeholder={user.location}>
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
                  src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
                  alt=""
                />
                  <input 
                  type="text" 
                  placeholder={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} 
                  onChange={handleChange}
                  name="avatar"
                />
              </div>
              <button className="userUpdateBtn" onClick={handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
