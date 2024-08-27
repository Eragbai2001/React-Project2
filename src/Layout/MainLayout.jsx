import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// Create a context
export const TaskContext = createContext();

const MainLayout = () => {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  function addTask(task) {
    if (task.trim()) {
      setTasks((t) => [
        ...t,
        { id: Date.now(), text: task, completed: false, isEditing: false },
      ]);
    }
  }

  function deleteTask(id) {
    const taskToDelete = tasks.find((task) => task.id === id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
  }

  return (
    <>
      <Header />
      <TaskContext.Provider
        value={{ tasks, deletedTasks, addTask, deleteTask }}>
        <Outlet />
      </TaskContext.Provider>
    </>
  );
};

export default MainLayout;
