import styled from "styled-components";
import { theme } from "../../theme";

function SelectInput({ Icon, className, options, name, onChange, value }) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <Icon className="icon" />}
      <select name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.background_white};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  transition:
    outline ease 0.05s,
    background ease 0.3s;

  &:focus-within {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 3px;
  }

  &:has(select:hover) {
    background: ${theme.colors.greyLight};
  }

  & .icon {
    font-size: ${theme.fonts.P1};
    min-width: 1rem;
    color: ${theme.colors.greyBlue};
  }

  select {
    background: none;
    border: none;
    color: ${theme.colors.dark};
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: "Open sans", sans-serif;
    font-weight: ${theme.weights.medium};
    cursor: pointer;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus {
      outline: none;
    }
  }
`;

export default SelectInput;
