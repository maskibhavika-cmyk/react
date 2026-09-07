import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// // import "./index.css";
// import App from "./App.jsx";
// // import UserContext from "./context/UserContext.jsx";
// import Profile from "./components/Profile.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//   {/* // <UserContext> */}
//   //   <App />
//     <Profile/>
//     </React.StrictMode>
//   // {/* // </UserContext> */}
// );

