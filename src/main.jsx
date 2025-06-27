import React from "react";
import ReactDOM from "react-dom/client"; // <-- NOTE: use 'react-dom/client'
import App from "./App";
import "./index.css"; // Must import Tailwind CSS here!
import "./component/Silk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


