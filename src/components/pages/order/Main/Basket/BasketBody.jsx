import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { focusOnRef } from "../../../../../utils/focusOnRef";

function BasketBody() {
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
  } = useOrderContext();

  const handleCardBasketDeletion = (e, id) => {
    e.stopPropagation();
    console.log(id);

    handleDeleteFromBasket(id);
  };

  const getCorrespondingProductInMenu = (product) => {
    const productFromMenu = menu.find(
      (productInMenu) => productInMenu.id === product.id,
    );
    return productFromMenu;
  };

  const handleClickOnBasketCard = async (id) => {
    if (!isAdminMode) return;
    if (productSelected.id === id) return setProductSelected(EMPTY_PRODUCT);

    await setIsPanelAdminOpen(true);
    await setActiveTab("editProduct");

    const productClickedOn = menu.find((product) => product.id === id);
    await setProductSelected(productClickedOn);

    focusOnRef(editProductTitleRef);
  };

  return (
    <BasketBodyStyled>
      {basket.map((product) => {
        // extract from menu the product that match the mapped one in basket
        const correspondingProductInMenu =
          getCorrespondingProductInMenu(product);

        return (
          correspondingProductInMenu && (
            <BasketCard
              key={product.id}
              imageSource={correspondingProductInMenu.imageSource}
              title={correspondingProductInMenu.title}
              price={correspondingProductInMenu.price}
              quantity={product.quantity}
              onDelete={(e) => handleCardBasketDeletion(e, product.id)}
              onClick={() => handleClickOnBasketCard(product.id)}
            />
          )
        );
      })}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  overflow-y: auto;
  padding: ${theme.spacing.md} 16px;

  /* if you want the scrollbar to be visible on hover only */
  /* scrollbar-color: transparent transparent; */
  /* &:hover {
    scrollbar-color: initial;
  } */
`;

export default BasketBody;
