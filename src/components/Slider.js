import { useState } from "react";

import "../components/assets/css/Slider.css";

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const backgroundColor = `linear-gradient(to right, green ${sliderValue}%, grey ${sliderValue}%)`;

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="custom-slider"
        style={{ background: backgroundColor }}
      />
      <div className="slider-value">{sliderValue}</div>
    </div>
  );
}
