import React from "react";
import Helmet from "react-helmet";

const Helmet = ({ title }) => {
  return (
    <div>
      {" "}
      <Helmet title={title}></Helmet>
    </div>
  );
};

export default Helmet;
