import React, { useState } from "react";
import axios from "axios";

// cONFIG
import config from "../../config";

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

    let { data } = await axios.post(
      `${config.API_URL}/o/token/?grant_type=password&username=${username}&password=${password}&client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}/`
    );
    console.log("data:::", data);
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your phone number"
            value={loginData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
