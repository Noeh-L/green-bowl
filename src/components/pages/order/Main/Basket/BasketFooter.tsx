import styled from "styled-components";
import { theme } from "@/theme/theme";

function BasketFooter() {
  return <BasketFooterStyled>Codé avec ❤️ et React.js</BasketFooterStyled>;
}

const BasketFooterStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 70px;
  color: ${theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: capitalize;
`;

export default BasketFooter;
