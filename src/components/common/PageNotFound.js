import React from "react";
import "../assets/css/Error.css";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet title="Page Not Found" />
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">Oops!</h1>
          <p className="error-message">
            We're sorry, but something went wrong.
          </p>
          <p className="error-message">
            Please try again later or contact support.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
