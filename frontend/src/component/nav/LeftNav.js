import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/user/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link to="/user/reset-password">Reset Password</Link>
        </li>

        <li className="nav-item">
          <Link to="/user/wishlist">Wishlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
