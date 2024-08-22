import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import TextInput from "../../../../reusable-ui/TextInput";
// import { getTextInputsConfig } from "./textInputsConfig";
import { FaBuildingCircleExclamation } from "react-icons/fa6";

function EditForm() {
  // state
  const {
    menu,
    idOfProductSelected,
    updateProductInMenu,
    editProductTitleRef,
  } = useOrderContext();

  const productSelected = menu.find((item) => item.id === idOfProductSelected);

  // const editTextInput = getTextInputsConfig(productSelected);

  // behavior
  const handleEditProduct = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    updateProductInMenu(productBeingUpdated);
  };

  // render
  return (
    <EditFormStyled>
      {idOfProductSelected ? (
        <div className="editForm">
          <img src={productSelected.imageSource} />

          <TextInput
            value={productSelected.title}
            name={"title"}
            onChange={handleEditProduct}
            Icon={FaBuildingCircleExclamation}
            placeholder={"Nom du produit (ex: Super Burger)"}
            className="text-inputs"
            version="normal"
            ref={editProductTitleRef}
          />
          <TextInput
            value={productSelected.imageSource}
            name={"imageSource"}
            onChange={handleEditProduct}
            Icon={FaBuildingCircleExclamation}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            className="text-inputs"
            version="normal"
          />
          <TextInput
            value={productSelected.price ? productSelected.price : ""}
            name="price"
            onChange={handleEditProduct}
            Icon={FaBuildingCircleExclamation}
            placeholder="Prix"
            className="text-inputs"
            version="normal"
          />

          <div className="info-message">
            Cliquer sur un produit du menu pour le modifier en temps réel
          </div>
        </div>
      ) : (
        <div className="hintMessage">
          <span>Cliquer sur un produit pour le modifier</span>
          <HiCursorClick />
        </div>
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

    .info-message {
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

export default EditForm;
