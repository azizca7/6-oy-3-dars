import React, { useState } from "react";
import "./index.css";
function Task2() {
  const [color, setColor] = useState([
    "red",
    "green",
    "gray",
    "purple",
    "blue",
    "orange",
    "pink",
  ]);
  const [currentColor, setCurrentColor] = useState(" #ff5733");

  function handleChange() {
    const randomColor = Math.floor(Math.random() * color.length);
    setCurrentColor(color[randomColor]);
  }
  return (
    <div>
      <h2>2. Rang almashtiruvchi</h2>
      <div
        style={{
          backgroundColor: currentColor,
        }}
        className="card"
      ></div>
      <button onClick={handleChange}>change</button>
    </div>
  );
}

export default Task2;
