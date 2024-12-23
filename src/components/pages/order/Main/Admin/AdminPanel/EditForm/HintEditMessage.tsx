import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "@/theme/theme";

function HintEditMessage() {
  return (
    <HintEditMessageStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintEditMessageStyled>
  );
}

const HintEditMessageStyled = styled.div`
  color: ${theme.colors.greyBlue};
  font-family: ${theme.family.stylish};
  font-size: ${theme.fonts.P3};

  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  margin-top: ${theme.spacing.xl};
`;

export default HintEditMessage;
