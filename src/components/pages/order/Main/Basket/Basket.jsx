import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";

function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <span>TOTAL</span>
        <div>0.00 €</div>
      </div>
      <div className="main">Votre commande est vide.</div>
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

  .header {
    background: ${theme.colors.background_dark};
    height: 70px;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 36px;
    text-transform: capitalize;
    color: ${theme.colors.primary};
  }

  .main {
    font-size: 36px;
    text-transform: capitalize;
    color: ${theme.colors.greyBlue};
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Basket;
