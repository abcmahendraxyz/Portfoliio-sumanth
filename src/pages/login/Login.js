import "./login.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <Link to={"/signup"}>
        <button className="loginRegisterButton">Register</button>
      </Link>
      <Link to={"/"}>
        <ArrowBackIcon className="backIconlogin" />
      </Link>
    </div>
  );
}

export default Login;
