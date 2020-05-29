import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Cinema Tracker</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navibar;
