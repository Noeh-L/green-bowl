/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusable-ui/Tab";
import TogglePanelButton from "./TogglePanelButton";
import AddProduct from "./AddProduct";
import ModifyProduct from "./ModifyProduct";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function Admin() {
  const { isPanelAdminOpen, setIsPanelAdminOpen } = useOrderContext();
  const { activeTab, setActiveTab } = useOrderContext();

  const tabs = [
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

  const togglePanel = () => {
    setIsPanelAdminOpen(!isPanelAdminOpen);
  };

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
        <TogglePanelButton
          isPanelAdminOpen={isPanelAdminOpen}
          onClick={togglePanel}
        />
        {tabs.map((tab, index) => {
          console.log(tab.label);
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
