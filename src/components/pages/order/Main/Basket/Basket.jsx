import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyBasket from "./EmptyBasket";
import { isArrayEmpty } from "../../../../../utils/array";

function Basket() {
  // state
  const { basket } = useOrderContext();

  // render
  const isBasketEmpty = isArrayEmpty(basket);

  return (
    <BasketStyled>
      <Total />
      {isBasketEmpty ? <EmptyBasket /> : <BasketBody />}
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.family.stylish};
  background: ${theme.colors.background_white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) inset;
  position: relative;
`;

export default Basket;
