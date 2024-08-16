/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../reusable-ui/Tab";
import AddForm from "./AddForm";
import ModifyProduct from "./ModifyProduct";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import { tabsConfig } from "./tabsConfig";

function Admin() {
  const { isPanelAdminOpen, setIsPanelAdminOpen } = useOrderContext();
  const { activeTab, setActiveTab } = useOrderContext();

  const tabs = tabsConfig(
    isPanelAdminOpen,
    setIsPanelAdminOpen,
    activeTab,
    setActiveTab,
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "addProduct":
        return <AddForm />;
      case "modifyProduct":
        return <ModifyProduct />;

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
  min-height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 15px;
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg} ${theme.spacing.xxl};
`;

export default Admin;
