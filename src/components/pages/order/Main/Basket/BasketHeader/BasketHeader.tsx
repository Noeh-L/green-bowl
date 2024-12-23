import styled from "styled-components";
import { theme } from "@/theme/theme";
import { calculateSumToPay } from "../helper";
import { useOrderContext } from "@/context/OrderPageContext";
import { formatPrice } from "@/utils/maths";
import CasinoEffect from "@/components/reusable-ui/CasinoEffect";
import { DEFAULT_AMOUNT_TO_PAY } from "@/enums/product";

function Total() {
  // state
  const { basket, menu } = useOrderContext();

  const amountToPay = menu
    ? calculateSumToPay(basket, menu)
    : DEFAULT_AMOUNT_TO_PAY;

  return (
    <TotalStyled>
      <span>TOTAL</span>
      <CasinoEffect count={formatPrice(amountToPay)} className={"totalPrice"} />
    </TotalStyled>
  );
}

const TotalStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 70px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 36px;
  text-transform: capitalize;
  color: ${theme.colors.primary};

  .totalPrice {
    font-weight: ${theme.weights.bold};
  }
`;

export default Total;
