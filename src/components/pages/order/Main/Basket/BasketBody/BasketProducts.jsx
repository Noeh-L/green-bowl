import styled from "styled-components";
import { theme } from "../../../../../../theme";
import BasketCard from "./BasketCard";
import { useOrderContext } from "../../../../../../context/OrderPageContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { focusOnRef } from "../../../../../../utils/focusOnRef";
import { findObjectById } from "../../../../../../utils/array";
import { formatPrice } from "../../../../../../utils/maths";
import { getMenuProductAssociated } from "../helper";
import Loader from "../../Menu/Loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function BasketProducts() {
  // state
  const {
    menu,
    basket,
    handleDeleteFromBasket,
    isAdminMode,
    setIsPanelAdminOpen,
    setActiveTab,
    productSelected,
    setProductSelected,
    editProductTitleRef,
    isLoading,
  } = useOrderContext();

  // behavior
  const handleCardBasketDeletion = (e, id) => {
    e.stopPropagation();

    handleDeleteFromBasket(id);
  };

  const handleClickOnBasketCard = async (id) => {
    if (!isAdminMode) return;
    if (productSelected.id === id) return setProductSelected(EMPTY_PRODUCT);

    await setIsPanelAdminOpen(true);
    await setActiveTab("editProduct");

    const productClickedOn = findObjectById(id, menu);

    await setProductSelected(productClickedOn);

    focusOnRef(editProductTitleRef);
  };

  // render
  if (isLoading) return <Loader />;

  return (
    <TransitionGroup component={BasketProductsStyled}>
      {basket.map((product) => {
        // extract from menu the product that match the mapped one in basket
        const correspondingProductInMenu = getMenuProductAssociated(
          product,
          menu,
        );

        return (
          <CSSTransition
            key={product.id}
            appear={true}
            classNames={"basketCard"}
            timeout={{ enter: 500, exit: 500 }}
          >
            <BasketCard
              imageSource={correspondingProductInMenu.imageSource}
              title={correspondingProductInMenu.title}
              price={
                isNaN(correspondingProductInMenu.price)
                  ? "NaN €"
                  : formatPrice(correspondingProductInMenu.price)
              }
              quantity={product.quantity}
              onDelete={(e) => handleCardBasketDeletion(e, product.id)}
              onClick={() => handleClickOnBasketCard(product.id)}
              isClickable={isAdminMode}
              isSelected={product.id === productSelected.id}
              isAdminMode={isAdminMode}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${theme.spacing.md} 16px;

  /* if you want the scrollbar to be visible on hover only */
  /* scrollbar-color: transparent transparent; */
  /* &:hover {
    scrollbar-color: initial;
  } */

  .basketCard-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-appear-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-enter-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .basketCard-exit-active {
    transform: translateX(-100px);
    opacity: 0%;
    transition: 0.5s;
  }
`;

export default BasketProducts;
