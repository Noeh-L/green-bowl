import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = (
  isPanelOpen,
  setIsPanelOpen,
  activeTab,
  setActiveTab,
) => [
  {
    icon: isPanelOpen ? FiChevronDown : FiChevronUp,
    label: "",
    onClick: () => setIsPanelOpen(!isPanelOpen),
    isActive: isPanelOpen ? false : true,
  },
  {
    icon: AiOutlinePlus,
    label: "Ajouter un produit",
    onClick: () => {
      setActiveTab("addProduct");
      setIsPanelOpen(true);
    },
    isActive: activeTab === "addProduct",
  },
  {
    icon: MdModeEditOutline,
    label: "Modifier un produit",
    onClick: () => {
      setActiveTab("modifyProduct");
      setIsPanelOpen(true);
    },
    isActive: activeTab === "modifyProduct",
  },
];
