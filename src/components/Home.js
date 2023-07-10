import React from "react";
import "../components/assets/css/Home.css"; // Import the CSS file for Home component
import GoogleAddress from "./common/GoogleAddress";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet title="Homepage" />
      <div className="home-container">
        {/* <h2> Home Page</h2> */}
        <p>
          As a React developer, you are in the right place to showcase your
          skills and build amazing web applications. React is a popular
          JavaScript library for building user interfaces, known for its
          component-based architecture and reusability.
        </p>
        <p>
          Whether you're just starting or already an experienced React
          developer, this is the perfect environment to sharpen your skills,
          learn new concepts, and stay up to date with the latest trends in the
          React ecosystem.
        </p>
        <p>
          Take advantage of the rich React ecosystem, including libraries,
          frameworks, and tools that enhance your development experience. Keep
          exploring and building awesome projects!
          {/* <GoogleAddress /> */}
        </p>
      </div>
    </>
  );
};

export default Home;
