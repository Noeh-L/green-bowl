import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
//@ts-ignore
import AddForm from "./AdminPanel/AddForm/AddForm";
//@ts-ignore
import EditForm from "./AdminPanel/EditForm/EditForm";
//@ts-ignore
import HintEditMessage from "./AdminPanel/EditForm/HintEditMessage";
import { ADMIN_TAB_LABEL } from "@/enums/adminTabLabel";
import { Tab } from "@/types/Tab";

export const getTabsConfig = (isAProductSelected: boolean): Tab[] => [
  {
    id: "0",
    name: ADMIN_TAB_LABEL.ADD,
    Icon: AiOutlinePlus,
    label: "Ajouter un produit",
    Content: <AddForm />,
  },
  {
    id: "1",
    name: ADMIN_TAB_LABEL.EDIT,
    Icon: MdModeEditOutline,
    label: "Modifier un produit",
    Content: isAProductSelected ? <EditForm /> : <HintEditMessage />,
  },
];

export const getTabSelected = (tabs: Tab[], activeTab: ADMIN_TAB_LABEL) => {
  return tabs.find((tab) => tab.name === activeTab);
};
