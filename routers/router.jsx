import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../src/components/pages/login/LoginPage";
import OrderPage from "../src/components/pages/order/OrderPage";
import ErrorPage from "../src/components/pages/error/ErrorPage";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/order/:username",
    element: <OrderPage />,
  },
  {
    path: "*", // "catch-all" route
    element: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
