import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { focusOnRef } from "../../../../../utils/focusOnRef";

export const getTabsConfig = (
  isPanelOpen,
  setIsPanelOpen,
  activeTab,
  setActiveTab,
  editProductTitleRef,
) => [
  {
    Icon: isPanelOpen ? FiChevronDown : FiChevronUp,
    label: "",
    onClick: () => setIsPanelOpen(!isPanelOpen),
    isActive: isPanelOpen ? false : true,
  },
  {
    Icon: AiOutlinePlus,
    label: "Ajouter un produit",
    onClick: () => {
      setActiveTab("addProduct");
      setIsPanelOpen(true);
    },
    isActive: activeTab === "addProduct",
  },
  {
    Icon: MdModeEditOutline,
    label: "Modifier un produit",
    onClick: async () => {
      await setActiveTab("editProduct");
      setIsPanelOpen(true);
      focusOnRef(editProductTitleRef);
    },
    isActive: activeTab === "editProduct",
  },
];
