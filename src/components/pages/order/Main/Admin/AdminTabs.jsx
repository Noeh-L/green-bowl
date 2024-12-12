import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusable-ui/Tab";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import { getTabsConfig } from "./tabsConfig.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { focusOnRef } from "../../../../../utils/focusOnRef";

function AdminTabs() {
  // state
  const {
    isPanelAdminOpen,
    setIsPanelAdminOpen,
    activeTab,
    setActiveTab,
    editProductTitleRef,
  } = useOrderContext();

  const tabs = getTabsConfig();

  // bahavior
  const selectTab = (tabSelected) => {
    setIsPanelAdminOpen(true); // open the admin panel
    setActiveTab(tabSelected); // active the tab selected
  };

  const handleClick = async (tabClicked) => {
    if (tabClicked === "editProduct") {
      await selectTab(tabClicked); // wait the render of the edit panel before focusing on ref
      focusOnRef(editProductTitleRef);
    } else {
      selectTab(tabClicked);
    }
  };

  // render
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isPanelAdminOpen ? FiChevronDown : FiChevronUp}
        label={""}
        onClick={() => setIsPanelAdminOpen(!isPanelAdminOpen)}
        isActive={isPanelAdminOpen ? false : true}
      />

      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.id}
            Icon={tab.Icon}
            label={tab.label}
            onClick={() => handleClick(tab.name)}
            isActive={activeTab === tab.name}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  width: fit-content;
  display: flex;
  align-items: end;
  gap: 1px;
  margin-left: ${theme.spacing.xl};
`;

export default AdminTabs;
