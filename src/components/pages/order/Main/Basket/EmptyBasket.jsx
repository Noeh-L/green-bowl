import styled from "styled-components";
import { theme } from "../../../../../theme";

function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.div`
  font-size: 36px;
  text-transform: capitalize;
  color: ${theme.colors.greyBlue};
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default EmptyBasket;
