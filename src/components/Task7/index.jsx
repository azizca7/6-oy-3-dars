import React, { useState } from "react";
import "./index.css";

function Task7() {
  const [buttonCounts, setButtonCounts] = useState({
    button1: 0,
    button2: 0,
    button3: 0,
  });

  function handleClick(button) {
    setButtonCounts({ ...buttonCounts, [button]: buttonCounts[button] + 1 });
  }

  function resetCounts() {
    setButtonCounts({
      button1: 0,
      button2: 0,
      button3: 0,
    });
  }

  return (
    <div>
      <h2>7. Tugmalarni bosish hisoblagichi</h2>
      <div className="buttons">
        <button onClick={() => handleClick("button1")}>
          Bosildi: {buttonCounts.button1} marta
        </button>
        <button onClick={() => handleClick("button2")}>
          Bosildi: {buttonCounts.button2} marta
        </button>
        <button onClick={() => handleClick("button3")}>
          Bosildi: {buttonCounts.button3} marta
        </button>
        <button onClick={resetCounts}>Reset</button>
      </div>
    </div>
  );
}

export default Task7;
