import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

// cONFIG
import config from "../../config";
import { getCookie } from "../../helper";

// Components
import OtpPannel from "./OtpPannel";

const Register = props => {
  const [registerData, setregisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    username: "",
    password: ""
  });

  const [otpPannel, setOtpPannel] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setregisterData({ ...registerData, [name]: value });
  };

  const handleOtp = async () => {
    let { data } = await axios.post(`${config.API_URL}/validate_phone/`, {
      phone_number: registerData.username
    });

    console.log("data:::", data);
    if (data.status) {
      setOtpPannel(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log("data:::", registerData);

    handleOtp();
  };

  const sendData = async () => {
    try {
      let { data } = await axios.post(`${config.API_URL}/custom_user/`, {
        user: {
          first_name: registerData.first_name,
          last_name: registerData.last_name,
          email: registerData.email,
          username: registerData.username,
          password: registerData.password
        },
        gender: registerData.gender,
        image: ""
      });

      console.log("data:::", data);

      setOtpPannel(false);
    } catch (ex) {
      console.log("exxx:::", ex, ex.reponse);
    }
  };

  if (getCookie("auth")) return <Redirect to="/create-question" />;

  return (
    <div className="Register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Jack"
            value={registerData.first_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Brown"
            value={registerData.last_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="me@email.com"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your phone number"
            value={registerData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Gender</label>
          <select name="gender" defaultValue="" onChange={handleChange}>
            <option value="" defaultChecked disabled>
              Choose Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>

      {otpPannel ? (
        <OtpPannel phoneNumber={registerData.username} sendData={sendData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;
