/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Main() {
  const { isAdminMode } = useOrderContext();

  return (
    <MainSyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        <TransitionGroup component={null}>
          {isAdminMode && (
            <CSSTransition classNames={"admin"} timeout={500}>
              <Admin />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </MainSyled>
  );
}

const MainSyled = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;

  .menu-and-admin {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    display: flex;
    overflow: hidden;
    position: relative;
    flex: 1;
  }

  .admin-enter {
    bottom: -100%;
  }
  .admin-enter-active {
    bottom: 0;
    transition: 0.5s;
  }
  .admin-enter-done {
  }

  .admin-exit {
    bottom: 0;
  }
  .admin-exit-active {
    bottom: -100%;
    transition: 0.5s;
  }
`;

export default Main;
