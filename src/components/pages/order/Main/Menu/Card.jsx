/* eslint-disable react/prop-types */
import Button from "../../../../reusable-ui/Button";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import { TiDelete } from "react-icons/ti";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Card({
  picture,
  label,
  price,
  onDelete,
  isDeleteButtonVisible,
  isLabel,
  isAdminMode,
  isCardSelected,
  onClick,
  onAddToBasket,
}) {
  // render
  return (
    <TransitionGroup
      component={CardStyled}
      $isAdminMode={isAdminMode}
      $isSelected={isCardSelected}
      onClick={onClick}
    >
      {isDeleteButtonVisible && (
        <CSSTransition classNames={"deleteButton"} timeout={500}>
          <button onClick={onDelete} className="deleteButton">
            <TiDelete />
          </button>
        </CSSTransition>
      )}
      <div className="picture">
        <img src={picture} alt={label} />
      </div>

      <div className="infos">
        <h2 className="infos-title">{isLabel ? label : <span>&nbsp;</span>}</h2>
        <div className="infos-add">
          <p className="price">{formatPrice(price)}</p>
          <Button
            label={"Ajouter"}
            className="addButton"
            onClick={onAddToBasket}
          />
        </div>
      </div>
    </TransitionGroup>
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
  box-shadow: ${theme.shadows.medium};
  transition: all ease 0.15s;
  position: relative;
  overflow: hidden;

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
    cursor: default;

    &-title {
      font-family: ${theme.family.stylish};
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

  .deleteButton {
    background: none;
    border: none;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.red};
    }
    &:active {
      color: ${theme.colors.primary};
    }
  }

  ${({ $isAdminMode }) => $isAdminMode && styleOnHover}
  ${({ $isAdminMode, $isSelected }) => {
    return $isAdminMode && $isSelected && styleOnSelected;
  }}

  .deleteButton-enter {
    right: -50px;
  }
  .deleteButton-enter-active {
    right: 15px;
    transition: 0.5s;
  }
  .deleteButton-enter-done {
    right: 15px;
    transition: 0.5s;
  }

  .deleteButton-exit {
    right: 15px;
  }
  .deleteButton-exit-active {
    right: -50px;
    transition: 0.5s;
  }
`;

const styleOnHover = css`
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow:
      ${theme.shadows.medium},
      0 0 8px ${theme.colors.primary};
  }
`;

const styleOnSelected = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  .infos {
    &-add {
      .price {
        color: ${theme.colors.white};
      }
      .addButton {
        background: ${theme.colors.white};
        color: ${theme.colors.primary};

        &:hover {
          border: 1px solid white;
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
        &:active {
          border: 1px solid white;
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
        }
      }
    }
  }

  .deleteButton {
    color: ${theme.colors.white};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.red};
    }
    &:active {
      color: ${theme.colors.white};
    }
  }
`;

export default Card;
