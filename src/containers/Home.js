import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="bg-dark text-light p-5 m-5">
        <h1>Welcome to Auth System!</h1>
        <br />
        <h3>How it works?</h3>
        <p>
          1. Click Signup on navigation bar to create a new account. <br />
          2. Fill the form and click register button. <br />
          3. Check your email to activate your account. <br />
          4. Login to your account. <br />
          5. Click reset password if you want to change your password <br />
        </p>
        <hr />
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
