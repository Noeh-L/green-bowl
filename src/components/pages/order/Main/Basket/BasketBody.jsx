import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function BasketBody({ basket }) {
  const { menu } = useOrderContext();

  return (
    <BasketBodyStyled>
      {basket.map((product) => {
        // extract from menu the product that match the mapped one in basket
        const productFromMenu = menu.find(
          (productInMenu) => productInMenu.id === product.id,
        );

        return (
          <BasketCard
            key={product.id}
            imageSource={productFromMenu.imageSource}
            title={productFromMenu.title}
            price={productFromMenu.price}
            quantity={product.quantity}
          />
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
