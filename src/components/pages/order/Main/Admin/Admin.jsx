/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import AddForm from "./AdminPanel/AddForm.jsx";
import EditForm from "./AdminPanel/EditForm/EditForm.jsx";
import { useOrderContext } from "../../../../../context/OrderPageContext.jsx";
import { getTabsConfig } from "./tabsConfig";

function Admin() {
  const { isPanelAdminOpen, setIsPanelAdminOpen } = useOrderContext();
  const { activeTab, setActiveTab, editProductTitleRef } = useOrderContext();

  const tabs = getTabsConfig(
    isPanelAdminOpen,
    setIsPanelAdminOpen,
    activeTab,
    setActiveTab,
    editProductTitleRef,
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "addProduct":
        return <AddForm />;
      case "editProduct":
        return <EditForm />;

      default:
        return <AddForm />;
    }
  };

  return (
    <AdminStyled $isPanelAdminOpen={isPanelAdminOpen}>
      <AdminTabs>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              Icon={tab.Icon}
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
  width: fit-content;
  display: flex;
  align-items: end;
  gap: 1px;
  margin-left: ${theme.spacing.xxl};
`;

const AdminContent = styled.div`
  min-height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 15px;
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg} ${theme.spacing.xxl};
`;

export default Admin;
