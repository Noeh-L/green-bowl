import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import Toast from "./components/reusable-ui/Toast";

const rootElement = document.getElementById("root");

if (!rootElement)
  throw new Error(
    "Root element not found. Make sure there is a DOM element with id 'root' in your HTML.",
  );

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Toast />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
