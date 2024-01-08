import React, { useEffect } from "react";
import darkPng from "../../src/assets/website/dark-mode-button.png";
import lightPng from "../../src/assets/website/light-mode-button.png";
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ?
    localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme,element]);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="relative">
      <img
        src={darkPng}
        alt=""
        onClick={changeTheme}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme !== "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={lightPng}
        onClick={changeTheme}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
