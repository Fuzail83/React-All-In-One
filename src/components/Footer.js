import React from "react";
import "../components/assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Add your logo or company name */}
          {/* <h1>Logo</h1> */}
        </div>

        {/* <div className="footer-social-media"> */}
        {/* Add social media icons */}
        {/* <span className="social-media-icon">Facebook</span>
          <span className="social-media-icon">Twitter</span>
          <span className="social-media-icon">Instagram</span> */}
        {/* </div> */}
      </div>
      <div className="footer-bottom">
        {/* Add additional information or copyright */}
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
