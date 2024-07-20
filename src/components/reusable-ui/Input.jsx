import styled from "styled-components";
import { theme } from "../../theme";

/* eslint-disable react/prop-types */
function Input({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
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
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P0};
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

export default Input;
