/* eslint-disable react/prop-types */
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import burger from "../../../assets/burger3.png";
import styled from "styled-components";
import { theme } from "../../../theme";

function Card({ name }) {
  return (
    <CardStyled>
      <div className="picture">
        <img src={burger} alt="Burger 1" />
      </div>

      <div className="infos">
        <h2 className="infos-title">{name}</h2>
        <div className="infos-add">
          <p className="price">5,50€</p>
          <PrimaryButton label={"Ajouter"} className="addButton" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  height: 330px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.xl} ${theme.spacing.md} 0;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.card};

  .picture {
    width: 200px;
    height: 145px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  .infos {
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
        width: 95px;
      }
    }
  }
`;

export default Card;
