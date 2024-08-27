import React, { createContext, useState } from "react";

// Create the context
export const TaskContext = createContext();

// TaskProvider component
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  // Delete a task and move it to deletedTasks
  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      const taskToDelete = prevTasks.find((task) => task.id === id);
      if (taskToDelete) {
        setDeletedTasks((prevDeletedTasks) => [
          ...prevDeletedTasks,
          taskToDelete,
        ]);
      }
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  // Permanently delete a task from deletedTasks
  const permanentlyDeleteTask = (id) => {
    setDeletedTasks((prevDeletedTasks) =>
      prevDeletedTasks.filter((task) => task.id !== id)
    );
  };

  // Provide context values, including permanentlyDeleteTask
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deletedTasks,
        addTask,
        deleteTask,
        permanentlyDeleteTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
