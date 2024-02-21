import { Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import Content from "./Content";
import SelectedCountry from "./SelectedCountry";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/selectedCountry/:name" element={<SelectedCountry />} />
      </Routes>
    </div>
  );
}

export default App;
