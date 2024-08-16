import { createContext, useContext, useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";

// 1. Création du contexte
export const OrderContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isPanelAdminOpen: false,
  setIsPanelAdminOpen: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  setMenu: () => {},
  handleAddProduct: () => {},
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("addProduct");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...menu];

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,

    isPanelAdminOpen,
    setIsPanelAdminOpen,

    activeTab,
    setActiveTab,

    menu,
    handleAddProduct,
  };

  return (
    <OrderContext.Provider value={valueOrderContext}>
      {children}
    </OrderContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => useContext(OrderContext);
