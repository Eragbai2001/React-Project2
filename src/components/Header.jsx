import React from "react";
import Book from "../assets/images/Screenshot 2024-08-15 123638.png";
import "../App.css"; // Ensure this path is correct if you need styles from App.css

const Header = () => {
  return (
    <section className="bg-custom-bg h-128 space-grotesk-unique-class">
      <div>
        <div className="flex ml-144 font-style2">
          <img src={Book} alt="desktop divider" className="w-[70px] mt-10" />
          <div className="mt-10 ml-3">
            <h1 className="text-5xl ">TODO LIST</h1>
            <h3 className="text-2xl">Create your list</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
