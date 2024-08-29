/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
import { useMenu } from "../hooks/useMenu";

// 1. Création du contexte
export const OrderContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isPanelAdminOpen: false,
  setIsPanelAdminOpen: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},
  newProduct: {},
  setNewProduct: () => {},
  productSelected: "",
  setProductSelected: () => {},
  handleEditProduct: () => {},
  editProductTitleRef: "",
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("addProduct");
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const editProductTitleRef = useRef();
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useMenu();

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,

    isPanelAdminOpen,
    setIsPanelAdminOpen,

    activeTab,
    setActiveTab,

    menu,
    handleAddProduct,
    handleDeleteProduct,
    resetMenu,
    newProduct,
    setNewProduct,

    productSelected,
    setProductSelected,
    handleEditProduct,

    editProductTitleRef,
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
