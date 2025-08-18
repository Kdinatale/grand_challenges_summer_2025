import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProfilePage from "./ProfilePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfilePage />
  </StrictMode>
);
