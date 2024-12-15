import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { getTabsConfig, getTabSelected } from "../tabsConfig.jsx";
import { useOrderContext } from "../../../../../../context/OrderPageContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";

function AdminPanel() {
  // state
  const { activeTab, productSelected } = useOrderContext();

  // behavior
  const isProductSelected = productSelected !== EMPTY_PRODUCT;
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
