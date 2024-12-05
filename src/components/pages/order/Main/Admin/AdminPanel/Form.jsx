/* eslint-disable react/display-name */
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./inputsConfig";
import { theme } from "../../../../../../theme";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { imagePreviewAppearAnimation } from "../../../../../../theme/animation";
import SelectInput from "../../../../../reusable-ui/SelectInput";

const Form = React.forwardRef(
  ({ onSubmit, product, onChange, onFocus, children, onBlur }, ref) => {
    const inputs = getInputsConfig(product);

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

        <div className="inputs-wrapper">
          {inputs.map((input) =>
            input.options ? (
              <SelectInput
                key={input.id}
                Icon={input.Icon}
                className={input.className}
                value={input.value}
                name={input.name}
                onChange={onChange}
                options={input.options}
              />
            ) : (
              <TextInput
                key={input.id}
                value={input.value}
                name={input.name}
                onChange={onChange}
                onFocus={onFocus}
                Icon={input.Icon}
                placeholder={input.placeholder}
                className={`text-inputs ${input.className ? input.className : ""}`}
                version="normal"
                ref={input.name === "title" ? ref : null}
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

  .inputs-wrapper {
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
