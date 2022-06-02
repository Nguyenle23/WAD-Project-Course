import {
  // CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  // Publish,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import {useState, useContext} from 'react';
import "./user.css";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCall";

export default function User() {
  const location = useLocation();
  const user = location.users;
  const [updateUserObject, setUpdateUser] = useState(null);
  
  // const history = useHistory();
  
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateUser({ ...user, [e.target.name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user._id, updateUserObject, dispatch);
    window.location.href="/users";
    // history.push("/users");
};

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User - <i>{user._id || "User_Id"}</i></h1>
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
            {/* <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div> */}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.gender || "Gender: None"}</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phonenumber || "Phone: None"}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email || "Email: None"}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.location || "Location: None"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
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
