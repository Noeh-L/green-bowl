import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";

function BasketBody({ basket }) {
  return (
    <BasketBodyStyled>
      {basket.map((product) => (
        <BasketCard key={product.id} {...product} />
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
`;

export default BasketBody;
