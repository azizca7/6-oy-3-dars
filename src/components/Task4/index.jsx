import React, { useState } from "react";
import './index.css'
function Task4() {
  const [isTrue, setTrue] = useState(true);

  function handleClick (prev){
    setTrue((prev) => !prev)
  }
  return (
    <div>
      <h2>4. Elementlarni yashirish/ko‘rsatish</h2>
      {isTrue && <div>React-ni o'rganish juda qiziqarli!</div>}
      <button className="btn" onClick={handleClick}>{isTrue ? "Yashirish" : "Ko'rsatish"}</button>
    </div>
  );
}

export default Task4;
