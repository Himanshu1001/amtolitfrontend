import React, { useState } from "react";
import axios from "axios";

// cONFIG
import config from "../../config";
import OtpPannel from "./OtpPannel";
import "./Register.scss";

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

  return (
    <div className="root-container">
    <div className="inner-container">
    <div className="header">
     Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label><br/>
          <input
            type="text"
            name="first_name"
            className="login-input"
            placeholder="Jack"
            value={registerData.first_name}
            onChange={handleChange}
          />
        </div><br/>

        <div>
          <label htmlFor="">Last Name</label><br/>
          <input
            type="text"
            name="last_name"
            className="login-input"
            placeholder="Brown"
            value={registerData.last_name}
            onChange={handleChange}
          />
        </div><br/>


        <div>
          <label htmlFor="">Email</label><br/>
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="me@email.com"
            value={registerData.email}
            onChange={handleChange}
          />
        </div><br/>


        <div>
          <label htmlFor="">Phone Number</label><br/>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Enter your phone number"
            value={registerData.username}
            onChange={handleChange}
          />
        </div><br/>


        <div>
          <label htmlFor="">Password</label><br/>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div><br/>


        <div>
          <label htmlFor="">Gender</label><br/>
          <select className="login-input"  name="gender" defaultValue="" onChange={handleChange}>
            <option value="" defaultChecked disabled>
              Choose Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div><br/>


        <button className="login-btn" type="submit">Register</button>
      </form>

      {otpPannel ? (
        <OtpPannel phoneNumber={registerData.username} sendData={sendData} />
      ) : (
        ""
      )}
     </div>
    </div>
  );
};

export default Register;
