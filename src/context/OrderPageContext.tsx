/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { EMPTY_PRODUCT } from "@/enums/product";
import { useMenu } from "@/hooks/useMenu";
import { useBasket } from "@/hooks/useBasket";
import { getLocalStorage } from "@/utils/windows";
import { findObjectById } from "@/utils/array";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";
import { ADMIN_TAB_LABEL } from "@/enums/adminTabLabel";
import { focusOnRef } from "@/utils/focusOnRef";

type OrderContextType = {
  isAdminMode: boolean;
  setIsAdminMode: React.Dispatch<React.SetStateAction<boolean>>;
  isPanelAdminOpen: boolean;
  setIsPanelAdminOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: ADMIN_TAB_LABEL;
  setActiveTab: React.Dispatch<React.SetStateAction<ADMIN_TAB_LABEL>>;
  menu: MenuProduct[] | undefined;
  handleAddProduct: (newProduct: MenuProduct) => Promise<void>;
  handleDeleteProduct: (idItemToDelete: string) => Promise<void>;
  resetMenu: () => Promise<void>;
  newProduct: MenuProduct;
  setNewProduct: React.Dispatch<React.SetStateAction<MenuProduct>>;
  productSelectedByAdmin: MenuProduct | null;
  setProductSelectedByAdmin: React.Dispatch<
    React.SetStateAction<MenuProduct | null>
  >;
  productSelectedByUser: MenuProduct | null;
  setProductSelectedByUser: React.Dispatch<
    React.SetStateAction<MenuProduct | null>
  >;
  handleEditProduct: (productBeingEdited: MenuProduct) => Promise<void>;
  editProductTitleRef: React.RefObject<HTMLInputElement | null>;
  basket: BasketProductQuantity[];
  handleAddToBasket: (productAdded: MenuProduct) => void;
  handleDeleteFromBasket: (id: string) => void;
  isLoading: boolean;
  handleCardSelection: (id: string) => Promise<void>;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

// 1. Création du contexte
export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }: PropsWithChildren) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<ADMIN_TAB_LABEL>(
    ADMIN_TAB_LABEL.ADD,
  );
  const [productSelectedByAdmin, setProductSelectedByAdmin] =
    useState<MenuProduct | null>(null);
  const [productSelectedByUser, setProductSelectedByUser] =
    useState<MenuProduct | null>(null);
  const editProductTitleRef = useRef<HTMLInputElement>(null);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useMenu();
  const { basket, handleAddToBasket, handleDeleteFromBasket } = useBasket();

  // Loader handler
  useEffect(() => {
    setIsLoading(true);

    const userData = getLocalStorage("userData");

    if (userData) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [setIsLoading]);

  // Card selection handler
  const handleCardSelection = async (id: string) => {
    if (!menu) return;

    // Open the modal for non-admin users
    if (!isAdminMode) {
      const productClickedOn = findObjectById(id, menu);

      if (!productClickedOn) return;
      setProductSelectedByUser(productClickedOn);
      return;
    }

    // Deselects if the same product is clicked
    if (productSelectedByAdmin?.id === id)
      return setProductSelectedByAdmin(null);

    await setIsPanelAdminOpen(true);
    await setActiveTab(ADMIN_TAB_LABEL.EDIT);

    const productClickedOnByAdmin = findObjectById(id, menu);

    if (!productClickedOnByAdmin) return;
    await setProductSelectedByAdmin(productClickedOnByAdmin);

    focusOnRef(editProductTitleRef);
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

    productSelectedByAdmin,
    setProductSelectedByAdmin,
    productSelectedByUser,
    setProductSelectedByUser,
    handleEditProduct,

    editProductTitleRef,

    basket,
    handleAddToBasket,
    handleDeleteFromBasket,

    isLoading,
    handleCardSelection,

    isModalVisible,
    setIsModalVisible,
  };

  return (
    <OrderContext.Provider value={valueOrderContext}>
      {children}
    </OrderContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => {
  const orderContextData = useContext(OrderContext);
  if (orderContextData === undefined)
    throw new Error(
      "useOrderContext() can only be used within OrderContextProvider",
    );

  return orderContextData;
};
