import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";

function BasketBody({ basket }) {
  return (
    <BasketBodyStyled>
      {basket.map((product, index) => (
        <div className="basket-card" key={`${product.id}-${index}`}>
          <div className="imageSource">
            <img src={product.imageSource} />
          </div>
          <div className="title-price">
            <div className="title">{product.title}</div>
            <div className="price">{formatPrice(product.price)}</div>
          </div>
          <div className="quantity">
            <div>x {product.quantity}</div>
          </div>
        </div>
      ))}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  overflow-y: auto;
  padding: ${theme.spacing.md} 16px;

  .basket-card {
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
        font-size: ${theme.fonts.P3};
        font-weight: ${theme.weights.bold};
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
  }
`;

export default BasketBody;
