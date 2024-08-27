import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getTextInputsConfig } from "./textInputsConfig";
import { theme } from "../../../../../../theme";

const Form = ({ onSubmit, product, onChange, children }) => {
  const textInputs = getTextInputsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview product={product} />

      {textInputs.map((textInput) => (
        <TextInput
          key={textInput.id}
          value={textInput.value}
          name={textInput.name}
          onChange={onChange}
          Icon={textInput.Icon}
          placeholder={textInput.placeholder}
          className="text-inputs"
          version="normal"
        />
      ))}

      <div className="form-footer">{children}</div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: grid;
  grid-template: repeat(4, 35px) / repeat(4, 200px);
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
