import styled from "styled-components";
import { theme } from "../../../theme";

function Main() {
  return (
    <MainSyled>
      {/* <div className="basket">Panier</div> */}
      <div className="deck">
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
        <div className="card">CARD</div>
      </div>
    </MainSyled>
  );
}

const MainSyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: flex;

  .deck {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.xl} ${theme.spacing.xxl};
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
    grid-auto-rows: 330px;

    .card {
      border: 1px solid blue;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Main;
