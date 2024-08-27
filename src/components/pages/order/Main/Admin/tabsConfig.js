import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = () => [
  {
    id: 0,
    name: "addProduct",
    Icon: AiOutlinePlus,
    label: "Ajouter un produit",
  },
  {
    id: 1,
    name: "editProduct",
    Icon: MdModeEditOutline,
    label: "Modifier un produit",
  },
];

export const getTabSelected = (tabs, activeTab) => {
  return tabs.find((tab) => tab.name === activeTab);
};
