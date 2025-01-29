import React, { useState } from "react";
import './index.css'
function Task8() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("inputga biror nima yozing");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => {
      if(i !== index){
        return true
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>8. To-do ro'yxati</h2>
      <div>
        <input
          type="text"
          placeholder="Yangi vazifa kiriting"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Qo'shish</button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map(function (todo, index) {
            return (
              <li key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>O'chirish</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Task8;
