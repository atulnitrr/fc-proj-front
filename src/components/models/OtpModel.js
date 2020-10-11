import React, { useState } from "react";
import { VERIFY_OTP } from "../../context/types";
import { withRouter } from "react-router-dom";
import "./OtpModel.css";

function OtpModel({ recipeDispaptch, history }) {
  //otpSeent
  const [otp, setOtp] = useState(0);
  const hanelSubmit = (e) => {
    e.preventDefault();
    let payload = {};

    // eslint-disable-next-line
    if (123456 == otp) {
      payload.status = "SUCCESS";
      payload.msg = "Successfully verified";
      history.push("/otpsuccess");
    } else {
      payload.status = "FAILURE";
      payload.msg = "Invalid OTP";
      history.push("/otpfailed");
    }
    recipeDispaptch({ type: VERIFY_OTP, payload });
  };
  return (
    <div className="otp-model-w">
      <div>
        <h4>Please enter OTP</h4>
      </div>
      <form action="" onSubmit={hanelSubmit}>
        <input
          type="number"
          name=""
          id=""
          placeholder="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default withRouter(OtpModel);
