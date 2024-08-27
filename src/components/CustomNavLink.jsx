import React from "react";
import Calender from "../assets/images/calendar-range.png";
import History from "../assets/images/history.png";
import { NavLink } from "react-router-dom";

const NavSection = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:ml-10 sm:mt-0">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center mt-4 ml-10 sm:ml-0 sm:mt-0 border-l-3 border-customary-lg sm:border-l-0 sm:border-b-3 sm:w-auto"
                : "flex items-center mt-4 ml-10 sm:ml-0 sm:mt-0"
            }
            to="/"
          >
            <img src={Calender} alt="calendar icon" className="w-[30px]" />
            <h2 className="text-2xl ml-2">Tasks</h2>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center mt-4 ml-10 sm:ml-0 sm:mt-0 border-l-3 border-customary-lg sm:border-l-0 sm:border-b-3 sm:w-auto"
                : "flex items-center mt-4 ml-10 sm:ml-0 sm:mt-0"
            }
            to="/History"
          >
            <img src={History} alt="history icon" className="w-[30px]" />
            <h2 className="text-2xl ml-2">History</h2>
          </NavLink>
        </div>
  );
};

export default NavSection;
