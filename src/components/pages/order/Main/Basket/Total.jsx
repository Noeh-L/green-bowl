import styled from "styled-components";
import { theme } from "../../../../../theme";

function Total({ amountToPay }) {
  return (
    <TotalStyled>
      <span>TOTAL</span>
      <span>{amountToPay}</span>
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
`;

export default Total;
