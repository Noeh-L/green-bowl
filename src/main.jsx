import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../routers/router.jsx";
import Toast from "./components/reusable-ui/Toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toast />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
