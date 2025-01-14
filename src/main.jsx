import { createRoot } from "react-dom/client";

//IMPORT STYLES
import "./style/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./router/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
