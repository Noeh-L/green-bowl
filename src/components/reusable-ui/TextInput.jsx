import styled, { css } from "styled-components";
import { theme } from "../../theme";

/* eslint-disable react/prop-types */
function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} $version={version}>
      {Icon && <Icon className="icon" />}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};

  & .icon {
    height: 15px;
    color: ${theme.colors.greyBlue};
  }

  input {
    background: none;
    border: none;
    color: ${theme.colors.dark};
    width: 100%;
    height: 100%;
    font-size: ${theme.fonts.P0};
    font-family: "Open sans", sans-serif;
    font-weight: ${theme.weights.medium};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ $version }) => extraStyle[$version]}
`;

const extraStyleNormal = css`
  background: ${theme.colors.background_white};
  padding: ${theme.spacing.xs} ${theme.spacing.md};

  .icon {
    color: ${theme.colors.greyBlue};
  }
  ::placeholder {
    font-weight: 400;
  }
  :focus {
    outline: 2px solid ${theme.colors.greyBlue};
    border-radius: 3px;
  }
`;

const extraStyleMinimalist = css`
  background: ${theme.colors.white};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
`;

// Dictionnaire
const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};

export default TextInput;
