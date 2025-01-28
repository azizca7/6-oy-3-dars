import React, { useState } from "react";

function Task6() {
  const [value, setValue] = useState(1);
  const [history, setHistory] = useState([]);

  function handleClickMultiply() {
    const newValue = value * 2;
    setValue(newValue);
    setHistory([...history, `${value} dan ${newValue} ga ko'paydi`]);
  }

  function handleClick() {
    const newValue = value / 2;
    setValue(newValue);
    setHistory([...history, `${value} dan ${newValue} ga bo'lindi`]);
  }

  return (
    <div>
      <h2>6. Oddiy hisob-kitob</h2>
      <p>Hozirgi qiymat: {value}</p>

      <div className="buttons">
        <button onClick={handleClickMultiply}>2 ga ko'paytirish</button>
        <button onClick={handleClick}>2 ga bo'lish</button>
      </div>

      <h3>Tarix:</h3>
      <ul>
        {history.length > 0 &&
          history.map(function (log, index) {
            return <li key={index}>{log}</li>;
          })}
      </ul>
    </div>
  );
}

export default Task6;
