import { theme } from "../../theme";
import styled, { css } from "styled-components";

// eslint-disable-next-line react/prop-types
function Button({ label, Icon, className, onClick, version = "primary" }) {
  return (
    <ButtonStyled className={className} onClick={onClick} $version={version}>
      {label}
      {Icon && <Icon className="icon" />}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ $version }) => extraStyle[$version]}
`;

const extraStylePrimary = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};

  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  padding: ${theme.spacing.md};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P0};
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

  .icon {
    font-size: ${theme.fonts.SM};
  }
`;
const extraStyleSecondary = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};

  width: fit-content;
  height: 100%;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  padding: ${theme.spacing.xs} ${theme.spacing.lg};

  color: ${theme.colors.white};
  font-weight: ${theme.weights.semiBold};
  font-family: "Open sans", sans-serif;
  font-size: ${theme.fonts.XS};

  cursor: pointer;
  transition: background 0.15s ease-in-out;

  .icon {
    font-size: ${theme.fonts.SM};
  }

  &:hover {
    background: white;
    color: ${theme.colors.success};
  }
  &:active {
    background: ${theme.colors.success};
    color: ${theme.colors.white};
  }
`;

const extraStyle = {
  primary: extraStylePrimary,
  secondary: extraStyleSecondary,
};

export default Button;