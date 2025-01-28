import React, { useState } from "react";
import "./index.css";
function Task3() {
  const [text, setText] = useState("Salom");
  const length = text.length;
  function handleChangeClick(newText) {
    setText(newText);
  }
  return (
    <div>
      <h2>3. Matn uzunligini hisoblash</h2>
      <p>{text}</p>
      <p>Matn uzunligi: {length}</p>
      <div className="buttons">
        <button onClick={() => handleChangeClick("Dunyo")}>Dunyo</button>
        <button onClick={() => handleChangeClick("ReactJS")}>ReactJS</button>
        <button onClick={() => handleChangeClick("Azizbek Ikromov")}>
          Azizbek Ikromov
        </button>
        <button onClick={() => handleChangeClick("Nima gap")}>Nima gap</button>
      </div>
    </div>
  );
}

export default Task3;
