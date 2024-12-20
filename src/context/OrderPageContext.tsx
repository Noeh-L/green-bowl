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
  handleDeleteProduct: (idItemToDelete: string | number) => Promise<void>;
  resetMenu: () => Promise<void>;
  newProduct: MenuProduct;
  setNewProduct: React.Dispatch<React.SetStateAction<MenuProduct>>;
  productSelected: MenuProduct;
  setProductSelected: React.Dispatch<React.SetStateAction<MenuProduct>>;
  handleEditProduct: (productBeingEdited: MenuProduct) => Promise<void>;
  editProductTitleRef: React.RefObject<HTMLInputElement | null>;
  basket: BasketProductQuantity[];
  handleAddToBasket: (productAdded: MenuProduct) => void;
  handleDeleteFromBasket: (id: string | number) => void;
  isLoading: boolean;
  handleCardSelection: (id: string) => Promise<void>;
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
  const [productSelected, setProductSelected] =
    useState<MenuProduct>(EMPTY_PRODUCT);
  const editProductTitleRef = useRef<HTMLInputElement>(null);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isLoading, setIsLoading] = useState(false);
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
    if (!isAdminMode) return;
    if (productSelected.id === id) return setProductSelected(EMPTY_PRODUCT);

    await setIsPanelAdminOpen(true);
    await setActiveTab(ADMIN_TAB_LABEL.EDIT);

    const productClickedOn = findObjectById(id, menu);

    if (!productClickedOn) return;
    await setProductSelected(productClickedOn);

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

    productSelected,
    setProductSelected,
    handleEditProduct,

    editProductTitleRef,

    basket,
    handleAddToBasket,
    handleDeleteFromBasket,

    isLoading,
    handleCardSelection,
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
