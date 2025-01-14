import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//IMPORT STYLES
import "./style/styles.css";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
