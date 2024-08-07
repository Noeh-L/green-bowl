import styled from "styled-components";
import { theme } from "../../theme";

/* eslint-disable react/prop-types */
function TextInput({ value, onChange, Icon, className, ...extraProps }) {
  return (
    <TextInputStyled className={className}>
      {Icon && <Icon className="icon" />}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.label`
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};

  & .icon {
    font-size: ${theme.fonts.SM};
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
`;

export default TextInput;
