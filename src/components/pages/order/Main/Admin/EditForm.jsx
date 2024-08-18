import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import ImagePreview from "./ImagePreview";
import { getTextInputsConfig } from "./textInputsConfig";
import TextInput from "../../../../reusable-ui/TextInput";

function ModifyProduct() {
  // state
  const { menu, idCardSelected, handleChange } = useOrderContext();

  // behavior
  const productToEdit = menu.find((item) => item.id === idCardSelected);

  const textInputs = getTextInputsConfig(productToEdit);

  // render
  return (
    <ModifyProductStyled>
      {productToEdit ? (
        <div className="editForm">
          <ImagePreview />
          {textInputs.map((textInput) => (
            <TextInput
              key={textInput.id}
              value={textInput.value}
              name={textInput.name}
              onChange={handleChange}
              Icon={textInput.Icon}
              placeholder={textInput.placeholder}
              className="text-inputs"
              version="normal"
            />
          ))}
          <div className="submit">
            Cliquer sur un produit du menu pour le modifier en temps réel
          </div>
        </div>
      ) : (
        <div className="hintMessage">
          <span>Cliquer sur un produit pour le modifier</span>
          <HiCursorClick />
        </div>
      )}
    </ModifyProductStyled>
  );
}

const ModifyProductStyled = styled.div`
  .editForm {
    display: grid;
    grid-template: repeat(4, 35px) / repeat(4, 200px);
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};

    .text-inputs {
      grid-column: 2 / 5;
    }

    .submit {
      grid-column: 2 / 5;
      display: flex;
      align-items: center;
      gap: ${theme.spacing.md};
    }
  }

  .hintMessage {
    color: ${theme.colors.greyBlue};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P3};

    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};

    margin-top: ${theme.spacing.xl};
  }
`;

export default ModifyProduct;
