import React, { useState } from "react";
import Plus from "../assets/images/plus.png";

function ToDoForm({ addTask }) {
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
          placeholder="Enter Your Task"
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default ToDoForm;