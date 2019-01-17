import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navbar">
      <Link to="/">
        <li className="navitem">Home</li>
      </Link>
      <Link to="/rappers">
        <li className="navitem">Rappers</li>
      </Link>
      <li className="navitem">Login/Sign Up</li>
    </ul>
  );
};

export default NavBar;
