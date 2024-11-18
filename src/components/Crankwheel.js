import React, { useEffect } from "react";

const loadCrankWheel = () => {
  (function (i, s, o, g, r, a, m) {
    i["CrankWheelObject"] = r;
    i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      };
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://app.crankwheel.com/assets/external/widget.js",
    "crankwheel"
  );
};

const CrankWheelComponent = () => {
  useEffect(() => {
    loadCrankWheel();
  }, []);

  return <div id="crankwheel"></div>;
};

export default CrankWheelComponent;
