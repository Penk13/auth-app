import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="bg-dark text-light p-5 m-5">
        <h1>Welcome to Auth System!</h1>
        <p>
          This is an incredible authentication system with production level
          features!
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
