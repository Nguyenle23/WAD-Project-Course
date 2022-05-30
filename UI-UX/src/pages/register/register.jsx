import { useState, useRef} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowForwardIosOutlined } from '@material-ui/icons';

import './register.scss';
import { registerUser } from '../../actions/index';

export default function Register() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate  = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(data).then(res => {
      if(res.status === 200) {
        navigate('/login');
      } else if(res.status === 400) {
        console.error(res);
        setError(res.data);  
      } else {
        setError(res.data);  
      }
    }); 
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to="/register">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link to="/login" className="loginButton">
            <span>Sign In</span>
          </Link>
          {/* <button className="loginButton">Sign In</button> */}
        </div>
      </div>
      <div className="containerRegister">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="input">
          <input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
          <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
          <button className="registerButton" onClick={handleSubmit}>
            Register
            <ArrowForwardIosOutlined />
          </button>
        </form>
        {error ? <p className="error">{error}</p> : null}
      </div>
    </div>
  );
}
