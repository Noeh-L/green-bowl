/* eslint-disable react/display-name */
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getTextInputsConfig } from "./textInputsConfig";
import { theme } from "../../../../../../theme";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { imagePreviewAppearAnimation } from "../../../../../../theme/animation";
import SelectInput from "../../../../../reusable-ui/SelectInput";

const Form = React.forwardRef(
  ({ onSubmit, product, onChange, onFocus, children, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(product);

    return (
      <TransitionGroup
        component={FormStyled}
        onSubmit={onSubmit}
        onBlur={onBlur}
      >
        <CSSTransition
          classNames={"imgPreview"}
          timeout={500}
          appear={true}
          key={product.imageSource}
        >
          <ImagePreview product={product} />
        </CSSTransition>

        <div className="textInputs-wrapper">
          {textInputs.map((textInput) =>
            textInput.options ? (
              <SelectInput
                key={textInput.id}
                Icon={textInput.Icon}
                className={textInput.className}
                options={textInput.options}
              />
            ) : (
              <TextInput
                key={textInput.id}
                value={textInput.value}
                name={textInput.name}
                onChange={onChange}
                onFocus={onFocus}
                Icon={textInput.Icon}
                placeholder={textInput.placeholder}
                className={`text-inputs ${textInput.className ? textInput.className : ""}`}
                version="normal"
                ref={textInput.name === "title" ? ref : null}
              />
            ),
          )}
        </div>

        <div className="form-footer">{children}</div>
      </TransitionGroup>
    );
  },
);

const FormStyled = styled.form`
  width: 75%;
  display: grid;
  grid-template-rows: 1fr 35px;
  grid-template-columns: 160px 1fr;
  grid-row-gap: ${theme.spacing.sm};
  grid-column-gap: ${theme.spacing.md};

  .textInputs-wrapper {
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: ${theme.spacing.xs};

    .text-inputs {
      grid-column: span 3;

      &.isCompacted {
        grid-column: span 1;
      }
    }
  }

  .form-footer {
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  }

  ${imagePreviewAppearAnimation}
`;

export default Form;
