import React, { useState } from "react";
import "./index.css";
function Task1() {
  const [number, setNumbers] = useState([]);

  function addNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const copied = [...number];
    copied.push(randomNumber);
    setNumbers(copied);
  }

  function handleClick() {
    const copied = [...number];
    copied.pop();
    setNumbers(copied);
  }

  function handleDelete() {
    setNumbers([]);
  }

  return (
    <div>
      <h1>1. Massivdagi raqamlarni boshqarish</h1>

      <div className="buttons">
        <button onClick={addNumber}>Qo‘shish</button>
        <button onClick={handleClick}>Oxirgi elementni o‘chirish</button>
        <button onClick={handleDelete}>Tozalash</button>
      </div>

      <h2>Massiv:</h2>

      <ul>
        {number.length > 0 &&
          number.map(function (num, index) {
            return <li key={index}>{num}</li>;
          })}

        {number.length == 0 && <p>Massiv bo'sh</p>}
      </ul>
    </div>
  );
}

export default Task1;
