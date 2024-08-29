/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
import { useMenu } from "../hooks/useMenu";
import { deepClone } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

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
  basket: [],
  setBasket: () => {},
  handleAddToBasket: () => {},
  handleDeleteFromBasket: () => {},
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
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (id) => {
    const basketCopy = deepClone(basket);
    const productAdded = menu.find((product) => product.id === id);
    const productAddedCopy = deepClone(productAdded);

    const productAlreadyAdded = basketCopy.find((product) => product.id === id);

    if (productAlreadyAdded) {
      updateProductInBasket(productAlreadyAdded, basketCopy);
    } else {
      addProductInBasket(productAddedCopy, basketCopy);
    }
  };

  const handleDeleteFromBasket = (id) => {
    const basketCopy = deepClone(basket);

    const basketUpdated = basketCopy.filter((product) => product.id !== id);

    setBasket(basketUpdated);
  };

  const updateProductInBasket = (productAlreadyInBasket, basket) => {
    const productAlreadyAddedUpdated = {
      ...productAlreadyInBasket,
      quantity: productAlreadyInBasket.quantity + 1,
    };

    const basketUpdated = basket.map((product) =>
      product.id === productAlreadyInBasket.id
        ? productAlreadyAddedUpdated
        : product,
    );

    setBasket(basketUpdated);
  };

  const addProductInBasket = (productToAddInBasket, basket) => {
    const newProductToAddToBasket = {
      ...productToAddInBasket,
      quantity: 1,
    };

    const basketUpdated = [newProductToAddToBasket, ...basket];

    setBasket(basketUpdated);
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

    productSelected,
    setProductSelected,
    handleEditProduct,

    editProductTitleRef,

    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
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
