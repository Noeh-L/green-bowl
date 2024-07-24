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

          <div className="card__infos">
            <h2 className="card__infos-title">
              Burger And Soda Bacon Egg Fries
            </h2>
            <div className="card__infos-add">
              <p className="price">5,50€</p>
              <PrimaryButton label={"Ajouter"} className="addButton" />
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

    .card {
      background: ${theme.colors.white};
      height: 330px;
      width: 240px;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm};
      padding: ${theme.spacing.xl} ${theme.spacing.md} 0;
      border-radius: ${theme.borderRadius.extraRound};
      box-shadow: ${theme.shadows.card};

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

      &__infos {
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xxs};

        &-title {
          font-family: "Amatic SC", serif;
          font-size: ${theme.fonts.P4};
          font-weight: ${theme.weights.bold};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &-add {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .price {
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.P0};
            font-weight: ${theme.weights.regular};
          }
          .addButton {
            font-size: ${theme.fonts.XS};
            padding: ${theme.spacing.sm} ${theme.spacing.lg};
          }
        }
      }
    }
  }
`;

export default Main;
