import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/animate.min.css";
import "./assets/css/backToTop.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/flaticon_gerold.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/light-mode.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/responsive.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
