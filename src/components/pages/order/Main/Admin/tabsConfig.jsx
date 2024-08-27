import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm/EditForm";
import HintEditMessage from "./AdminPanel/EditForm/HintEditMessage";

export const getTabsConfig = (isAProductSelected) => [
  {
    id: "0",
    name: "addProduct",
    Icon: AiOutlinePlus,
    label: "Ajouter un produit",
    Content: <AddForm />,
  },
  {
    id: "1",
    name: "editProduct",
    Icon: MdModeEditOutline,
    label: "Modifier un produit",
    Content: isAProductSelected ? <EditForm /> : <HintEditMessage />,
  },
];

export const getTabSelected = (tabs, activeTab) => {
  return tabs.find((tab) => tab.name === activeTab);
};
