import React, { useState } from "react";
import axios from "axios";

// Config
import config from "../../config";

const OtpPannel = ({ phoneNumber, sendData }) => {
  const [otp, setOtp] = useState("");

  const handleChange = ({ target }) => {
    let { value } = target;

    setOtp(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let { data } = await axios.post(`${config.API_URL}/validate_otp/`, {
      phone_number: phoneNumber,
      otp
    });

    console.log("otp verif:::", data);

    if (data.status) {
      sendData();
    }
  };

  return (
    <div className="OtpPannel">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Otp</label>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OtpPannel;
