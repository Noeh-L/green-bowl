import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketBody from "./BasketBody/BasketBody";
import BasketFooter from "./BasketFooter";

function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
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
