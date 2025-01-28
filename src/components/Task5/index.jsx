import React, { useState } from "react";

function Task5() {
  const [number, setNumber] = useState(null);
  const [numberList, setNumberList] = useState([]);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setNumber(randomNumber);
    const copied = [...numberList];
    copied.push(randomNumber);
    setNumberList(copied);
  }

  return (
    <div>
      <h2>5. Tasodifiy raqam generatori</h2>
      <p>
        Oldingi sonlar:
        <ul>
          {numberList.length > 0 &&
            numberList.map(function (num, index) {
              return <li key={index}>{num}</li>;
            })}
          {numberList.length == 0 && <p>avvalgi sonlar yo'q</p>}
        </ul>
      </p>

      <p>Hozirgi son: {number !== null ? number : <p>Son mavjud emas</p>}</p>
      <button onClick={handleClick}>generate</button>
    </div>
  );
}

export default Task5;
