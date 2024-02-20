import { Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import Content from "./Content";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
