import styled, { css } from "styled-components";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect.jsx";

function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  onClick,
  isClickable,
  isSelected,
  isAdminMode,
}) {
  return (
    <BasketCardStyled
      onClick={onClick}
      $isClickable={isClickable}
      $isSelected={isSelected}
      $isAdminMode={isAdminMode}
    >
      <div className="imageSource">
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} />
      </div>
      <div className="title-price">
        <div className="title">{title ? title : <span>&nbsp;</span>}</div>
        <div className="price">{price}</div>
      </div>
      <div className="quantity">
        <CasinoEffect count={`x ${quantity}`} />
      </div>
      <button onClick={onDelete} className="delete-button">
        <MdDeleteForever className="icon" />
      </button>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  padding: ${theme.spacing.xs} 36px ${theme.spacing.xs} 16px;
  width: 100%;
  min-height: 86px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  box-shadow: -4px 4px 15px 0px #00000033;
  border-radius: ${theme.borderRadius.round};
  position: relative;
  overflow: hidden;
  transition: background-color 0.15s;

  .imageSource {
    width: 86px;
    height: 70px;
    margin-right: ${theme.spacing.md};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title-price {
    cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};

    .title {
      width: 110px;
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.bold};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .price {
      font-size: 15px;
      font-family: ${theme.family.minimalist};
      color: ${({ $isSelected, $isAdminMode }) =>
        $isSelected && $isAdminMode
          ? theme.colors.white
          : theme.colors.primary};
    }
  }

  .quantity {
    font-size: 15px;
    font-family: ${theme.family.minimalist};
    color: ${theme.colors.primary};
    margin-left: auto;
    white-space: nowrap;
    color: ${({ $isSelected, $isAdminMode }) =>
      $isSelected && $isAdminMode ? theme.colors.white : theme.colors.primary};
  }

  .delete-button {
    position: absolute;
    right: -76px;
    height: 100%;
    width: 76px;
    background-color: ${theme.colors.red};
    border: none;
    cursor: pointer;
    transition: all ease 0.15s;

    .icon {
      font-size: 24px;
      color: black;
    }
  }

  &:hover .delete-button {
    right: 0px;

    .icon {
      color: ${theme.colors.white};
    }

    &:hover {
      .icon {
        color: black;
      }
    }

    &:active {
      .icon {
        color: ${theme.colors.white};
      }
    }
  }

  ${({ $isClickable }) => ($isClickable ? styleOnHover : null)}
  ${({ $isSelected, $isAdminMode }) =>
    $isSelected && $isAdminMode ? styleOnSelected : null}
`;

const styleOnHover = css`
  cursor: pointer;
`;

const styleOnSelected = css`
  background-color: ${theme.colors.primary};
`;

export default BasketCard;
