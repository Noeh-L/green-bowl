/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import Menu from "./Menu/Menu";

function Main() {
  const { isAdminMode } = useOrderContext();

  return (
    <MainSyled>
      <div className="basket">
        <div className="basket-header">TOTAL</div>
        <div className="basket-main">Panier vide</div>
        <div className="basket-footer">Codé avec ❤ et React.js</div>
      </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &-header {
      background: black;
      height: 70px;
      color: white;
    }
    &-main {
    }
    &-footer {
      background: black;
      height: 70px;
      color: white;
    }
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
