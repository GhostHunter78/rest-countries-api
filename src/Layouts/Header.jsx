import LightMoon from "../SVGs/LightMoon";
import DarkMoon from "../SVGs/DarkMoon";
import { useState } from "react";

const Header = ({ toggleTheme, activeTheme }) => {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode);
  };
  return (
    <div
      className="flex flex-row items-center w-screen justify-between px-4 py-[30px]"
      style={{
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        background: activeTheme === "light" ? "white" : "#2b3844",
      }}
    >
      <h2
        className="font-bold  text-[14px]"
        style={{
          color: activeTheme === "light" ? "#111517" : "white",
        }}
      >
        Where in the world?
      </h2>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleTheme}
      >
        {lightMode ? <LightMoon /> : <DarkMoon />}
        <p
          className="font-semibold text-[12px]"
          style={{
            color: activeTheme === "light" ? "#111517" : "white",
          }}
        >
          {lightMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
};

export default Header;
