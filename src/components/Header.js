import React from "react";
import "../components/assets/css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <nav className="navbar">
          <div className="logo">
            {/* Add your logo or company name */}
            {/* <h1>Logo</h1> */}
          </div>
          <ul className="nav-menu">
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">Contact</li>
            </Link>
            <Link to="/localstorage">
              <li className="nav-item">Local Storage Data</li>
            </Link>
            {/* <Link to="/posts">
              <li className="nav-item">Posts</li>
            </Link> */}
            <Link to="/productList">
              <li className="nav-item">Redux</li>
            </Link>
            <Link to="/addrowdelete">
              <li className="nav-item">Add Row </li>
            </Link>
            <Link to="/toggle">
              <li className="nav-item">Toggle </li>
            </Link>
            <Link to="/mulitpleImagesUpload">
              <li className="nav-item">Multiple Image Upload </li>
            </Link>

            {/* <Link to="/apiCall">
              <li className="nav-item">JSON Server Api Call</li>
            </Link>
            <Link to="/list">
              <li className="nav-item">Contact Dashboard</li>
            </Link> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
