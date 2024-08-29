import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function BasketBody() {
  const { menu, basket, handleDeleteFromBasket } = useOrderContext();

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
`;

export default BasketBody;
