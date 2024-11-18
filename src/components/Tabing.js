import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

const Tabing = (props) => {
  const queryParams = useParams();

  const navigate = useNavigate();

  console.log("queryParams", props, queryParams);

  const { tabName } = queryParams ? queryParams : {};

  console.log("tabName", tabName);

  // state through tabing

  // const [tab, setTab] = useState("tab1");
  //   const tabing = (name) => {
  //      setTab(name);
  //   };

  //  Routing through Tabing

  const tabing = (name) => {
    console.log("name", name);
    navigate(`/tabing/${name}`);
  };

  return (
    <>
      {" "}
      <div className="main-data">
        <Helmet title="Tabing" />
        <button onClick={() => tabing("tab1")}>Tab 1</button>
        <button onClick={() => tabing("tab2")}>Tab 2</button>
        <button onClick={() => tabing("tab3")}>Tab 3</button>

        {/* Render component  */}
        {/* <div>{tab === "tab1" && <About />}</div>
      <div>{tab === "tab2" && <Home />}</div>
      <div>{tab === "tab3" && <Contact />}</div> */}

        {/* Render Data  */}
        <div>
          {tabName === "tab1" && (
            <>
              <div>
                <h2>Data 1 </h2>
              </div>
            </>
          )}
        </div>
        <div>
          {tabName === "tab2" && (
            <>
              <div>
                <h2>Data 2 </h2>
              </div>
            </>
          )}
        </div>
        <div>
          {tabName === "tab3" && (
            <>
              <div>
                <h2>Data 3 </h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabing;
