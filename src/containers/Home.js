import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container m-5">
      <div className="bg-dark text-light p-5">
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
