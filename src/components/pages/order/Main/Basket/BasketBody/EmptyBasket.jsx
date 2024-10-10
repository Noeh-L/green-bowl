import styled from "styled-components";
import { theme } from "../../../../../../theme";

function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.span`
  font-size: 36px;
  text-transform: capitalize;
  color: ${theme.colors.greyBlue};
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default EmptyBasket;
