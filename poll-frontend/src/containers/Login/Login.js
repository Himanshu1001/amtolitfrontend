import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

// cONFIG
import config from "../../config";
import { setCookie, getCookie } from "../../helper";

import "./Login.scss";

const Login = props => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log("data:::", loginData);

    const { username, password } = loginData;

    let { data } = await axios.post(`${config.API_URL}/login/`, {
      username,
      password
    });

    console.log("data:::", data);
    setCookie("auth", JSON.stringify(data.user), 30);

    window.location.href = "/create-question";
  };

  if (getCookie("auth")) return <Redirect to="/create-question" />;

  return (
    <div className="root-container">
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                className="login-input"
                name="username"
                placeholder="Enter your phone number"
                value={loginData.username}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="login-input"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
          <br />
          <Link to="/register">I am not a user, sign me up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
