import styled from "styled-components";
import { theme } from "@/theme/theme";
import { getTabsConfig, getTabSelected } from "../tabsConfig";
import { useOrderContext } from "@/context/OrderPageContext";

function AdminPanel() {
  // state
  const { activeTab, productSelectedByAdmin } = useOrderContext();

  // behavior
  const isProductSelected = productSelectedByAdmin !== null;
  const tabs = getTabsConfig(isProductSelected);
  const tabSelected = getTabSelected(tabs, activeTab);

  // render
  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  min-height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 15px;
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
`;

export default AdminPanel;
