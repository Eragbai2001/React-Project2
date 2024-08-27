// src/components/Body.jsx
import React, { useContext } from "react";
import "../App.css";
import Calender from "../assets/images/calendar-range.png";
import HistoryIcon from "../assets/images/history.png"; // Rename to avoid conflict
import { NavLink } from "react-router-dom";
import ToDoForm from "../components/ToDoForm2";
import ToDo from "../components/ToDo2.";
import { TaskContext } from "../context/TaskContext"; // Ensure this path matches your directory structure
function Body() {
  const { tasks, addTask, deleteTask } = useContext(TaskContext); // Using context

  return (
    <section className="bg-customary-bg">
      <div className="items-center w-full">
        <div className="sm:w-auto grid grid-cols-3 gap-1 lg:col-span-full lg:gap-0">
          <div className="mt-10 ml-10 lg:block md:hidden">
            <ToDoForm addTask={addTask} />
          </div>

          <div className="flex flex-col lg:flex-row w-full col-span-1 lg:col-span-full">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center mt-10 ml-10 border-l-3 border-customary-lg sm:border-l-0 sm:border-b-3 sm:w-auto"
                  : "flex items-center mt-10 ml-10"
              }
              to="/">
              <img src={Calender} alt="calendar icon" className="w-[30px]" />
              <h2 className="text-2xl ml-2">Tasks</h2>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center mt-10 ml-10 border-l-3 border-customary-lg sm:border-l-0 sm:border-b-3 sm:w-auto"
                  : "flex items-center mt-10 ml-10"
              }
              to="/History">
              <img src={HistoryIcon} alt="history icon" className="w-[30px]" />
              <h2 className="text-2xl ml-2">History</h2>
            </NavLink>
          </div>
          <div className="mt-9 ml-10 lg:block md:hidden lg:grid-cols-none">
            <ToDo tasks={tasks} deleteTask={deleteTask} />
          </div>
          <div className="mt-10 lg:hidden col-span-1">
            <ToDoForm addTask={addTask} />
            <ToDo tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
