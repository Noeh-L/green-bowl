import { theme } from "../../theme";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.semiBold};
  font-family: "Open sans", sans-serif;
  cursor: pointer;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  &:active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export default PrimaryButton;
