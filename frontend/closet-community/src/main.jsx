import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ViewProfilePage from "./ViewProfilePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ViewProfilePage />
  </StrictMode>
);
