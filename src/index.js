import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Headlines from "./components/Headlines";
import Latest from "./components/Latest";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="headlines" element={<Headlines />} />
        <Route path="latest" element={<Latest />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
