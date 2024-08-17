import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

function ModifyProduct() {
  return (
    <ModifyProductStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </ModifyProductStyled>
  );
}

const ModifyProductStyled = styled.div`
  color: ${theme.colors.greyBlue};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P3};

  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  margin-top: ${theme.spacing.xl};
`;

export default ModifyProduct;
