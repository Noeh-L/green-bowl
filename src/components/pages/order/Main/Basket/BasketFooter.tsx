import styled from "styled-components";
import { theme } from "@/theme/theme";

function BasketFooter() {
  return (
    <BasketFooterStyled>
      Codé par&nbsp;
      <a href="https://noehledra.fr" className="portfolio-link" target="_blank">
        Noeh
      </a>
      &nbsp;avec 💚 et React.TS
    </BasketFooterStyled>
  );
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

  .portfolio-link {
    color: ${theme.colors.primary};
    transition: color ease 0.2s;

    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

export default BasketFooter;
