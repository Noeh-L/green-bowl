import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import burger from "../../../assets/burger-bacon-egg.png";

function Main() {
  return (
    <MainSyled>
      {/* <div className="basket">Panier</div> */}
      <div className="deck">
        <div className="card">
          <div className="card__img">
            <img src={burger} alt="Burger 1" />
          </div>
          <div className="card__info">
            <h1>Burger n°1</h1>
            <div className="card__info-add">
              <p>5,50€</p>
              <PrimaryButton label={"Ajouter"} />
            </div>
          </div>
        </div>
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
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.xs};
      padding: ${theme.spacing.lg};

      &__img {
        width: 200px;
        height: 145px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
          object-fit: cover;
          width: 100%;
        }
      }
    }
  }
`;

export default Main;
