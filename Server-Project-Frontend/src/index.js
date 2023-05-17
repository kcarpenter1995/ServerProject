import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);

reportWebVitals();