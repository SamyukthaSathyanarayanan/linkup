import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import "./LoginStyle.css";

export function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePassword = () => {
    setPasswordType((previous) => (previous === "password" ? "text" : "password"));
  };

  const handleUserName = (event) => {
    setUname(data => event.target.value);
  };

  const handlePass = (event) => {
    setPass(data => event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(uname, pass, location);
  };

  const handleTestUser = () => {
    setUname("sam_sathya123");
    setPass("JDp@ssW0rd");
  };

  const handleSignup = () => {
    navigate("/signUp");
  };

  return (
    <div className="container-login">
      <div className="left-box-login">
        <img
          className="img-login"
          src="https://img.freepik.com/premium-photo/information-privacy-cyber-security-data-protection-internet-technology-concept_161452-4846.jpg"
          alt="loading"
        ></img>
      </div>
      <div className="right-box-login">
      <h2 className="heading-login">Login</h2>
        <form className="form-login" onSubmit={(event) => handleSubmit(event)}>
          
          <label htmlFor="email" className="email-label-login">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="sam@gmail.com"
            className="emailinput-login"
            onChange={(event) => handleUserName(event)}
          />
          <label htmlFor="password" className="password-label-login">
            Password
          </label>
          <input
            id="password"
            placeholder="***********"
            className="passwordinput-login"
            type={passwordType}
            onChange={(event) => handlePass(event)}
          />
          {passwordType === "password" ? (
            <i onClick={() => handlePassword()} className="bi bi-eye" id="eye"></i>
          ) : (
            <i onClick={() => handlePassword()} className="bi bi-eye-slash" id="eye"></i>
          )}

          <button className="loginButton" onClick={() => handleTestUser()}>
            Guest Login
          </button>
          {/* <button className="loginButton">Login</button> */}
          
            
            <div className="signup-text-login">Don't have an account?
            <span className="signup-login" onClick={() => handleSignup()}>
              Sign Up
            
          </span></div>
        </form>  
      </div>
    </div>
  );
}
