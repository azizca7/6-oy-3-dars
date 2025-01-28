import React, { useState } from "react";

function Task10() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((check) => !check);
  };

  return (
    <>
      <h2>10. Lampochka yoqish/o‘chirish</h2>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "black",
        }}
      ></div>
      <p>Lampochka {isOn ? "yoqilgan" : "o'chirilgan"}</p>
      <button onClick={handleClick}>
        Lampochkani {isOn ? "o'chirish" : "yoqish"}
      </button>
    </>
  );
}

export default Task10;
