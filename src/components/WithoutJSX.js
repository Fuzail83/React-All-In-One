import React from "react";

export default function WithoutJSX() {
  const newElement = React.createElement(
    "h2",
    { className: "xyz" },
    "Hello Without JSX"
  );

  let a = 286258;
  console.log(a);

  const commaSeperatedValue = a.toLocaleString("en-IN");
  console.log(commaSeperatedValue);

  return (
    <>
      WithoutJSX
      <h1>Test</h1>
      {newElement}
    </>
  );
}
