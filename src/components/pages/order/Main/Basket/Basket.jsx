import styled from "styled-components";
import { theme } from "../../../../../theme";

function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <span>TOTAL</span>
        <div>0.00 €</div>
      </div>
      <div className="main">Votre commande est vide.</div>
      <div className="footer">Codé avec ❤️ et React.js</div>
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

  .footer {
    background: ${theme.colors.background_dark};
    height: 70px;
    color: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-transform: capitalize;
  }
`;

export default Basket;
