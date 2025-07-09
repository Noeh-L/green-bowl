/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "@/theme/theme";
import Admin from "./Admin/Admin";
import { useOrderContext } from "@/context/OrderPageContext";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { displayModal, panelAnimation } from "@/theme/animation";
import ProductModal from "./Menu/ProductModal";
import { useEffect } from "react";

function Main() {
  const {
    isAdminMode,
    productSelectedByUser,
    setProductSelectedByUser,
    isModalVisible,
    setIsModalVisible,
  } = useOrderContext();

  useEffect(() => {
    if (productSelectedByUser) {
      setIsModalVisible(true);
    }
  }, [productSelectedByUser]);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleExited = () => {
    setProductSelectedByUser(null);
  };

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

      {/* Overlay (fade + blur) */}
      <CSSTransition
        in={isModalVisible}
        timeout={300}
        classNames="modalOverlay"
        unmountOnExit
      >
        <div className="overlay" onClick={handleCloseModal}></div>
      </CSSTransition>

      {/* Modal (scale up) */}
      <CSSTransition
        in={isModalVisible}
        timeout={300}
        classNames="productModal"
        unmountOnExit
        onExited={handleExited}
      >
        {productSelectedByUser && (
          <ProductModal
            product={productSelectedByUser}
            onClose={handleCloseModal}
          />
        )}
      </CSSTransition>
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

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 3;

    background: rgba(201 201 201 / 0.25);
    backdrop-filter: blur(5px);
  }

  ${panelAnimation}
  ${displayModal}
`;

export default Main;
