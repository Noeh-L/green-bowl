import styled, { css } from "styled-components";
import { IMAGE_BY_DEFAULT } from "@/enums/product";
import { theme } from "@/theme/theme";
import { MdDeleteForever } from "react-icons/md";
import CasinoEffect from "@/components/reusable-ui/CasinoEffect";
import Sticker from "@/components/reusable-ui/Sticker";
import { badgeAnimation } from "@/theme/animation";

type BasketCardProps = {
  imageSource: string;
  title: string;
  price: string;
  quantity: number;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
  isAdminMode: boolean;
  isProductAdvertised: boolean;
};

function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  onClick,
  isSelected,
  isAdminMode,
  isProductAdvertised,
}: BasketCardProps) {
  return (
    <BasketCardStyled
      onClick={onClick}
      $isSelected={isSelected}
      $isAdminMode={isAdminMode}
    >
      <div className="imageSource">
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} />
        {isProductAdvertised && (
          <Sticker className={"advertisingSticker"} scale={"1.5"} />
        )}
      </div>
      <div className="title-price">
        <div className="title">{title ? title : <span>&nbsp;</span>}</div>
        <CasinoEffect count={price} className={"price"} />
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

type BasketCardStyledProps = {
  $isSelected: boolean;
  $isAdminMode: boolean;
};

const BasketCardStyled = styled.div<BasketCardStyledProps>`
  padding: ${theme.spacing.xs} 36px ${theme.spacing.xs} 16px;
  width: 100%;
  min-height: 86px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  box-shadow: -4px 4px 15px 0px #00000033;
  border-radius: ${theme.borderRadius.round};
  position: relative;
  overflow: hidden;
  transition: all ease 0.15s;
  cursor: pointer;

  .imageSource {
    width: 86px;
    height: 70px;
    margin-right: ${theme.spacing.md};
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .advertisingSticker {
      position: absolute;
      bottom: 20%;
      right: 15%;
      animation: ${badgeAnimation} ease 0.3s;
    }
  }

  .title-price {
    .title {
      width: 110px;
      font-size: ${theme.fonts.P2};
      font-weight: ${theme.weights.bold};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-transform: uppercase;
    }
    .price {
      font-size: 15px;
      font-family: ${theme.family.minimalist};
      color: ${({ $isSelected, $isAdminMode }) =>
        $isSelected && $isAdminMode
          ? theme.colors.white
          : theme.colors.primary};
      left: 0;
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

  &:hover {
    .delete-button {
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

    ${({ $isAdminMode }) =>
      $isAdminMode ? styleOnAdminHover : styleOnUserHover}
  }

  ${({ $isSelected, $isAdminMode }) =>
    $isSelected && $isAdminMode ? styleOnSelected : null}
`;

const styleOnUserHover = css`
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.background_white};
  }
`;

const styleOnAdminHover = css`
  &:hover {
    transform: scale(1.025);
    cursor: pointer;
    box-shadow:
      ${theme.shadows.medium},
      0 0 8px ${theme.colors.primary};
  }
`;

const styleOnSelected = css`
  background-color: ${theme.colors.primary};
`;

export default BasketCard;
