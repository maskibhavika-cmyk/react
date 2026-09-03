import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import UserContext from "./context/UserContext.jsx";
import Profile from "./components/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
    <Profile/>
  </UserContext>
);