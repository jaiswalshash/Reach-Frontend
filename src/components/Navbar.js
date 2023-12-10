import { React, useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import lit from "../assets/lit.ico";
import "./navbar.css";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      id="navbar"
      className="flex items-center justify-between absolute
     w-full h-14 px-16 bg-slate-300 bg-opacity-40 backdrop-filter 
     backdrop-blur-18 border border-opacity-20 border-white top-0"
    >
      <div className="flex gap-2 font-bold dark:text-white text-gray-700">
        <img src={lit} alt="" width={25} height={15} />
        HARMONY <span>PAGES</span>{" "}
      </div>

      <div
        onClick={toggleDarkMode}
        className="flex items-center justify-between gap-4"
      >
        {theme === "light" ? (
          <FaSun className="text-yellow-400 text-2xl cursor-pointer" />
        ) : (
          <FaMoon className="text-black text-2xl cursor-pointer" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
