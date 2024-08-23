import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useOrderContext } from "../../../../../../context/OrderPageContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "../ImagePreview";
import HintEditMessage from "./HintEditMessage";
import InfoEditMessage from "./InfoEditMessage";
import { getTextInputsConfig } from "../textInputsConfig";

function EditForm() {
  // state
  const {
    menu,
    idOfProductSelected,
    updateProductInMenu,
    editProductTitleRef,
  } = useOrderContext();

  const productSelected = menu.find((item) => item.id === idOfProductSelected);

  // behavior
  const handleEditProduct = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    updateProductInMenu(productBeingUpdated);
  };

  const editTextInputs =
    productSelected && getTextInputsConfig(productSelected);

  // render
  return (
    <EditFormStyled>
      {productSelected ? (
        <div className="editForm">
          <ImagePreview product={productSelected} />

          {editTextInputs.map((editTextInput) => (
            <TextInput
              key={editTextInput.id}
              value={editTextInput.value}
              name={editTextInput.name}
              Icon={editTextInput.Icon}
              placeholder={editTextInput.placeholder}
              onChange={handleEditProduct}
              className="text-inputs"
              version="normal"
              ref={editTextInput.name === "title" ? editProductTitleRef : null}
            />
          ))}

          <InfoEditMessage />
        </div>
      ) : (
        <HintEditMessage />
      )}
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  .editForm {
    display: grid;
    grid-template: repeat(4, 35px) / repeat(4, 200px);
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};

    .text-inputs {
      grid-column: 2 / 5;
    }
  }
`;

export default EditForm;
