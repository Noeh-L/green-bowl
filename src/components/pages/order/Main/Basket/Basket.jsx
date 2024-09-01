import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import { formatPrice } from "../../../../../utils/maths";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import EmptyBasket from "./EmptyBasket";
import { findObjectById } from "../../../../../utils/array";

function Basket() {
  // state
  const { basket, menu } = useOrderContext();

  // behavior & logic
  const getMenuProductAssociated = (product) => {
    const productAssociated = findObjectById(product.id, menu);
    return productAssociated;
  };

  const amountToPay = basket.reduce((acc, item) => {
    const menuProductAssociated = getMenuProductAssociated(item);

    const priceOfMenuProductAssociated = isNaN(menuProductAssociated.price)
      ? 0
      : Math.round(menuProductAssociated.price * 100) / 100;

    return acc + item.quantity * priceOfMenuProductAssociated;
  }, 0);

  // render
  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(amountToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketBody />}
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.family.stylish};
  background: ${theme.colors.background_white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) inset;
`;

export default Basket;
