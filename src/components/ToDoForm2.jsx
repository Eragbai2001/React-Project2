import React, { useState } from "react";
import Plus from "../assets/images/plus.png";

function ToDoForm2({ addTask }) {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask(newTask);
    setNewTask("");
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="History..."
          value={newTask}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </form>
  );
}

export default ToDoForm2;