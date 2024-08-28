import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";
import BasketHeader from "./BasketHeader";
import EmptyBasket from "./EmptyBasket";

function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <EmptyBasket />
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
