import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import { formatPrice } from "../../../../../utils/maths";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyBasket from "./EmptyBasket";

function Basket() {
  const { basket } = useOrderContext();

  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
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
  font-family: "Amatic SC", cursive;
  background: ${theme.colors.background_white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) inset;
`;

export default Basket;
