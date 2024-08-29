import styled from "styled-components";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";

function BasketCard({ imageSource, title, price, quantity }) {
  return (
    <BasketCardStyled>
      <div className="imageSource">
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} />
      </div>
      <div className="title-price">
        <div className="title">{title ? title : <span>&nbsp;</span>}</div>
        <div className="price">{formatPrice(price)}</div>
      </div>
      <div className="quantity">
        <div>x {quantity}</div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  padding: ${theme.spacing.xs} 16px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  box-shadow: -4px 4px 15px 0px #00000033;
  border-radius: ${theme.borderRadius.round};

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
    .title {
      width: 120px;
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.bold};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .price {
      font-size: 15px;
      font-family: ${theme.family.minimalist};
      color: ${theme.colors.primary};
    }
  }

  .quantity {
    font-size: 15px;
    font-family: ${theme.family.minimalist};
    color: ${theme.colors.primary};
    margin-left: auto;
  }
`;

export default BasketCard;
