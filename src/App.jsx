import { Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import Content from "./Content";
import SelectedCountry from "./SelectedCountry";
import { useState } from "react";

function App() {
  const [activeTheme, setActiveTheme] = useState("light");
  const toggleTheme = () => {
    setActiveTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    const newBackgroundColor = activeTheme === "light" ? "#202c36" : "#fafafa";
    document.body.style.background = newBackgroundColor;
  };
  return (
    <div className="flex flex-col">
      <Header activeTheme={activeTheme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Content activeTheme={activeTheme} />} />
        <Route
          path="/selectedCountry/:name"
          element={
            <SelectedCountry
              activeTheme={activeTheme}
              toggleTheme={toggleTheme}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
