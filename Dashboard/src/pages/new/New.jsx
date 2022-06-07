import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { FileUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

export const New = () => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
        <Sidebar />
        <div className="new_container">
          <Navbar />
          <div className="new_container_top">
            <h1 className="top_tilte">ADD NEW USER</h1>
          </div>
          <div className="new_container_bottom">
            <div className="bottom_left">
              <img src={file ? URL.createObjectURL(file) : "https://i.pinimg.com/564x/9e/46/c7/9e46c7ebe515311bf97b0d72143ae41a.jpg" } alt="avt_add" className="left_img"/>
              
            </div>
            <div className="bottom_right">
              <form> 
                 <div className="formInput">
                  <label>
                    Image: <FileUploadOutlined className="lable_logo" />
                  </label>
                  <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}  />
                </div>
                <div className="form_input">
                  <label>Username:</label>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="formInput">
                  <label>First name:</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="formInput">
                  <label>Last name:</label>
                  <input type="text" placeholder="Your last name" />
                </div>
                <div className="formInput">
                  <label>Email:</label>
                  <input type="email" placeholder="ted1804@gmail.com" />
                </div>
                <div className="formInput">
                  <label>DoB:</label>
                  <input type="date" placeholder="11/08/2000" />
                </div>
                <div className="formInput">
                  <label>Phone:</label>
                  <input type="text" placeholder="01671318223" />
                </div>
                <div className="formInput">
                  <label>Password:</label>
                  <input type="password"/>
                </div>
                <div className="formInput">
                  <label>Address:</label>
                  <input type="text" placeholder="International University"/>
                </div>
                <div className="formInput">
                  <label>Country:</label>
                  <input type="text" placeholder="Vietnam"/>
                </div>
                <button>SEND</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New