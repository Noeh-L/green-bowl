/* eslint-disable react/display-name */
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { theme } from "../../../../../../theme";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { imagePreviewAppearAnimation } from "../../../../../../theme/animation";
import Fields from "./Fields";

const Form = React.forwardRef(
  ({ onSubmit, product, onChange, onFocus, children, onBlur }, ref) => {
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

        <Fields
          product={product}
          onChange={onChange}
          onFocus={onFocus}
          ref={ref}
        />

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

  .form-footer {
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  }

  ${imagePreviewAppearAnimation}
`;

export default Form;
