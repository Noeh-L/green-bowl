import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

// const router = createBrowserRouter([
//   { path: "/", element: <LoginPage /> },
//   {
//     path: "/order",
//     element: <OrderPage />,
//   },
// ]);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
