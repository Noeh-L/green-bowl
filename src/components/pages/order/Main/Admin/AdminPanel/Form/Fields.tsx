/* eslint-disable react/display-name */
import SelectInput from "@/components/reusable-ui/SelectInput";
import TextInput from "@/components/reusable-ui/TextInput";
import { getInputsConfig } from "./inputsConfig";
import styled from "styled-components";
import { theme } from "@/theme";
import React from "react";
import { MenuProduct } from "@/types/Product";

type FieldsProps = {
  product: MenuProduct;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

const Fields = React.forwardRef<HTMLInputElement, FieldsProps>(
  ({ product, onChange, onFocus }, ref) => {
    const inputs = getInputsConfig(product);

    return (
      <FieldsStyled>
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
              value={input.value ? input.value : ""}
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
      </FieldsStyled>
    );
  },
);

const FieldsStyled = styled.div`
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
`;

export default Fields;
