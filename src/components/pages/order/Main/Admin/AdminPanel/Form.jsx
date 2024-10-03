/* eslint-disable react/display-name */
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getTextInputsConfig } from "./textInputsConfig";
import { theme } from "../../../../../../theme";
import React from "react";

const Form = React.forwardRef(
  ({ onSubmit, product, onChange, onFocus, children, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit} onBlur={onBlur}>
        <ImagePreview product={product} />

        {textInputs.map((textInput) => (
          <TextInput
            key={textInput.id}
            value={textInput.value}
            name={textInput.name}
            onChange={onChange}
            onFocus={onFocus}
            Icon={textInput.Icon}
            placeholder={textInput.placeholder}
            className="text-inputs"
            version="normal"
            ref={textInput.name === "title" ? ref : null}
          />
        ))}

        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  },
);

const FormStyled = styled.form`
  width: 75%;
  display: grid;
  grid-template-rows: repeat(4, 35px);
  grid-template-columns: 160px repeat(3, 1fr);
  grid-row-gap: ${theme.spacing.xs};
  grid-column-gap: ${theme.spacing.md};

  .text-inputs {
    grid-column: 2 / 5;
  }

  .form-footer {
    grid-column: 2 / 5;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  }
`;

export default Form;
