import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ASScroll from "@ashthornton/asscroll";

const asscroll = new ASScroll();

window.addEventListener("load", () => {
  asscroll.enable();
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
