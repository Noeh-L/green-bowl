/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../reusable-ui/Tab";
import AddProduct from "./AddProduct";
import ModifyProduct from "./ModifyProduct";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function Admin() {
  const { isPanelAdminOpen, setIsPanelAdminOpen } = useOrderContext();
  const { activeTab, setActiveTab } = useOrderContext();

  const tabs = [
    {
      icon: isPanelAdminOpen ? FiChevronDown : FiChevronUp,
      label: "",
      onClick: () => setIsPanelAdminOpen(!isPanelAdminOpen),
      isActive: isPanelAdminOpen ? false : true,
    },
    {
      icon: AiOutlinePlus,
      label: "Ajouter un produit",
      onClick: () => {
        setActiveTab("addProduct");
        setIsPanelAdminOpen(true);
      },
      isActive: activeTab === "addProduct",
    },
    {
      icon: MdModeEditOutline,
      label: "Modifier un produit",
      onClick: () => {
        setActiveTab("modifyProduct");
        setIsPanelAdminOpen(true);
      },
      isActive: activeTab === "modifyProduct",
    },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case "addProduct":
        return <AddProduct />;
      case "modifyProduct":
        return <ModifyProduct />;

      default:
        return <AddProduct />;
    }
  };

  return (
    <AdminStyled $isPanelAdminOpen={isPanelAdminOpen}>
      <AdminTabs>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              Icon={tab.icon}
              label={tab.label}
              onClick={tab.onClick}
              isActive={tab.isActive}
            />
          );
        })}
      </AdminTabs>

      {isPanelAdminOpen && <AdminContent>{renderActiveTab()}</AdminContent>}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  filter: drop-shadow(0 0 10px rgba(0 0 0 / 0.4));
`;

const AdminTabs = styled.div`
  /* border: 3px solid blue; */
  width: fit-content;
  display: flex;
  align-items: end;
  gap: 1px;
  margin-left: ${theme.spacing.xxl};
`;

const AdminContent = styled.div`
  min-height: 252px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 15px;
  background: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export default Admin;
