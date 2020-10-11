import React from "react";
import "./OtpSuccess.css";
import { Link } from "react-router-dom";

function OtpSuccess() {
  return (
    <div className="otps-w">
      <p>Successfully verified OTP</p>
      <Link to="/"> Go home</Link>
    </div>
  );
}

export default OtpSuccess;
