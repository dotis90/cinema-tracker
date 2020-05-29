import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <h1>Welcome to Cinema Tracker. Find and track your favorite movies.</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Landing;
