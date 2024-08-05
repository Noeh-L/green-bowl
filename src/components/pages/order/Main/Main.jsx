/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import Menu from "./Menu";

function Main() {
  const { isAdminMode, setIsAdminMode } = useOrderContext();

  return (
    <MainSyled>
      {/* <div className="basket">Panier</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode && <Admin />}
      </div>
    </MainSyled>
  );
}

const MainSyled = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;

  .basket {
    background: teal;
    width: 25%;
  }

  .menu-and-admin {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    display: flex;
    overflow: hidden;
    position: relative;
    flex: 1;
  }
`;

export default Main;
