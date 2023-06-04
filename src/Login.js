import React, { useState } from "react";
import logo from "./sources/Logo.PNG";
import { Navigate } from "react-router-dom";
import "./css/Login.css";
import "./css/NewColors.css";

const RIGHT_PASSWORD = "admin123";
const RIGHT_USERNAME = "admin";

const Login = (props) => {
  const [userInputData, setUserInputData] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      userInputData.username !== RIGHT_USERNAME ||
      userInputData.password !== RIGHT_PASSWORD
    ) {
      alert("Zadány špatné přihlašovací údaje");
    } else {
      handleLogin();
      console.log("Logged in");
    }
  };

  const handleChange = (evt) => {
    setUserInputData((prevData) => {
      return { ...prevData, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <div className="login-body">
      <div className="login-main">
        <img
          src={logo}
          alt="Logo společnosti"
          style={{ width: "25vw", borderRadius: "0.3em" }}
        />
        <p className="fw-bold">Zadejte prosím vaše přihlašovací údaje</p>
        {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-inputs">
            <input
              type="text"
              name="username"
              placeholder="Uživatelské jméno"
              required="required"
              value={userInputData.username}
              onChange={handleChange}
              className="login-form-item"
            />
            <input
              type="password"
              name="password"
              placeholder="Heslo"
              required="required"
              value={userInputData.password}
              onChange={handleChange}
              className="login-form-item"
            />
          </div>
          <button className="btn bgcolor-primary-new login-form-item">
            <span className="text-light fw-bold">PŘIHLÁSIT SE</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
