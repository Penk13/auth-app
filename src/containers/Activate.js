import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify, match }) => {
  const [verified, setVerivied] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;
    verify(uid, token);
    setVerivied(true);
  };

  if (verified) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="p-3">Verify your Account</h1>
      <button className="btn btn-primary p-3" onClick={verify_account}>
        Verify
      </button>
    </div>
  );
};

export default connect(null, { verify })(Activate);
