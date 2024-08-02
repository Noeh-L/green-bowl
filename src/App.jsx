import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import IsAdminModeContextProvider from "./context/IsAdminContext";
import IsPanelAdminOpenProvider from "./context/IsPanelAdminOpen";
import ActiveTabContextProvider from "./context/ActiveTabContext";

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
      <IsPanelAdminOpenProvider>
        <ActiveTabContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/order/:username" element={<OrderPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </ActiveTabContextProvider>
      </IsPanelAdminOpenProvider>
    </IsAdminModeContextProvider>
  );
}

export default App;
