import styled from "styled-components";
import { theme } from "@/theme/theme";

function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.span`
  font-size: ${theme.fonts.P4};
  color: ${theme.colors.greyBlue};
  flex: 1;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default EmptyBasket;
