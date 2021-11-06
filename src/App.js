import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Headlines from "./components/Headlines";
import Latest from "./components/Latest";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
          <Route path="home" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
          <Route path="headlines" element={<Headlines searchValue={searchValue} setSearchValue={setSearchValue} />} />
          <Route path="latest" element={<Latest searchValue={searchValue} setSearchValue={setSearchValue} />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
};

export default App;
