import { useState, useRef} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowForwardIosOutlined } from '@material-ui/icons';

import './register.scss';
import { registerUser } from '../../actions/index';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate  = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  console.log(email, password, username);

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      registerUser(email, password, username);
      // await axios.post("auth/register", { email,username, password });
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
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
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
              <ArrowForwardIosOutlined />
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
