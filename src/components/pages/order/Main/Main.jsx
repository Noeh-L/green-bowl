/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Admin from "./Admin/Admin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { panelAnimation } from "../../../../theme/animation.js";

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

  ${panelAnimation}
`;

export default Main;
