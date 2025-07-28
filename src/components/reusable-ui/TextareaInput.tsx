/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "@/theme/theme";
import React from "react";

type TextareaInputProps = {
  Icon?: React.ElementType;
} & React.ComponentProps<"textarea">;

function TextareaInput({
  value,
  onChange,
  onFocus,
  Icon,
  className,
  ...extraProps
}: TextareaInputProps) {
  return (
    <TextareaInputStyled className={className} htmlFor="textarea">
      {Icon && <Icon className="icon" />}
      <textarea
        id="textarea"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        {...extraProps}
      ></textarea>
    </TextareaInputStyled>
  );
}

const TextareaInputStyled = styled.label`
  background: ${theme.colors.background_white};
  padding: ${theme.spacing.xs} 16px;
  display: flex;
  align-items: start;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  transition: outline ease 0.05s;

  & .icon {
    font-size: ${theme.fonts.P1};
    min-width: 1rem;
    color: ${theme.colors.greyBlue};
  }

  textarea {
    background: none;
    border: none;
    color: ${theme.colors.dark};
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: ${theme.family.minimalist};
    font-weight: ${theme.weights.medium};
    resize: vertical;
    min-height: 75px;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.greyMedium} transparent;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-weight: 400;
    }
    &:focus {
      outline: none;
      border-radius: 3px;
    }
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;

export default TextareaInput;
