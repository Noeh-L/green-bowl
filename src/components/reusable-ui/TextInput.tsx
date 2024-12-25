/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { theme } from "@/theme/theme";
import React, { ComponentPropsWithRef } from "react";

type TextInputVersion = "normal" | "minimalist";

type TextInputProps = {
  Icon?: React.ElementType;
  version?: TextInputVersion;
} & ComponentPropsWithRef<"input">;

// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      value,
      onChange,
      onFocus,
      Icon,
      className,
      version = "normal",
      ...extraProps
    },
    ref,
  ) => {
    return (
      <TextInputStyled className={className} $version={version}>
        {Icon && <Icon className="icon" />}
        <input
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          {...extraProps}
          ref={ref}
        />
      </TextInputStyled>
    );
  },
);

type TextInputStyledProps = {
  $version: TextInputVersion;
};

const TextInputStyled = styled.label<TextInputStyledProps>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  transition: outline ease 0.05s;

  & .icon {
    font-size: ${theme.fonts.P1};
    min-width: 1rem;
  }

  input {
    background: none;
    border: none;
    color: ${theme.colors.dark};
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: ${theme.family.minimalist};
    font-weight: ${theme.weights.medium};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }

  ${({ $version }) => extraStyle[$version]}
`;

const extraStyleNormal = css`
  background: ${theme.colors.background_white};
  padding: ${theme.spacing.xs} 16px;

  .icon {
    color: ${theme.colors.greyBlue};
  }
  ::placeholder {
    font-weight: 400;
  }
  :focus {
    outline: none;
    border-radius: 3px;
  }
`;

const extraStyleMinimalist = css`
  background: ${theme.colors.white};
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  :focus {
    outline: none;
    border-radius: 3px;
  }
`;

// Dictionnaire
const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};

export default TextInput;
