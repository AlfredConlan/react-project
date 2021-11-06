import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

render(<App />, rootElement);
