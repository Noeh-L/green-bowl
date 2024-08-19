/* eslint-disable react-refresh/only-export-components */
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
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},
  newProduct: {},
  setNewProduct: () => {},
  idCardSelected: "",
  handleCardSelection: () => {},
  updateProductInMenu: () => {},
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("editProduct");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [idCardSelected, setIdCardSelected] = useState(null);

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...menu];

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const handleDeleteProduct = (idItemToDelete) => {
    const menuCopy = [...menu];

    const menuUpdated = menuCopy.filter((item) => item.id !== idItemToDelete);

    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  const handleCardSelection = (id) => {
    if (!isAdminMode) return;

    if (idCardSelected === id) {
      setIdCardSelected(null); // Désélectionne un card qui est sélectionnée
    } else {
      setIdCardSelected(id);
      setIsPanelAdminOpen(true);
      setActiveTab("editProduct");
    }
  };

  const updateProductInMenu = (updatedProduct) => {
    setMenu((prevMenu) =>
      prevMenu.map(
        (item) => (item.id === updatedProduct.id ? updatedProduct : item),
        // on map le menu jusqu'à trouver le produit à updater et j'envoie le produit updated
      ),
    );
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
    handleDeleteProduct,
    resetMenu,
    newProduct,
    setNewProduct,

    idCardSelected,
    handleCardSelection,
    updateProductInMenu,
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
