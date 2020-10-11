import React from "react";
import "./OtpFailed.css";
import { Link } from "react-router-dom";

function OtpFailed() {
  return (
    <div className="otpf-w">
      <div>
        <p>Verificaiton failed, please try again</p>
        <Link to="/"> Go home</Link>
      </div>
    </div>
  );
}

export default OtpFailed;
