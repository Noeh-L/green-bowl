import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import IsAdminModeContextProvider from "./context/IsAdminContext";

// const router = createBrowserRouter([
//   { path: "/", element: <LoginPage /> },
//   {
//     path: "/order",
//     element: <OrderPage />,
//   },
// ]);

function App() {
  return (
    <IsAdminModeContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </IsAdminModeContextProvider>
  );
}

export default App;
