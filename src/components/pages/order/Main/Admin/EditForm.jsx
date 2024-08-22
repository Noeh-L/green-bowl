import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/OrderPageContext";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import ImagePreview from "./ImagePreview";

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

  // render
  return (
    <EditFormStyled>
      {idOfProductSelected ? (
        <div className="editForm">
          <ImagePreview product={productSelected} />

          <TextInput
            value={productSelected.title}
            name={"title"}
            onChange={handleEditProduct}
            Icon={FaHamburger}
            placeholder={"Nom du produit (ex: Super Burger)"}
            className="text-inputs"
            version="normal"
            ref={editProductTitleRef}
          />
          <TextInput
            value={productSelected.imageSource}
            name={"imageSource"}
            onChange={handleEditProduct}
            Icon={BsFillCameraFill}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            className="text-inputs"
            version="normal"
          />
          <TextInput
            value={productSelected.price ? productSelected.price : ""}
            name="price"
            onChange={handleEditProduct}
            Icon={MdOutlineEuro}
            placeholder="Prix"
            className="text-inputs"
            version="normal"
          />

          <div className="info-message">
            Cliquer sur un produit du menu pour le modifier&nbsp;
            <span>en temps réel</span>
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
      color: ${theme.colors.primary};

      span {
        text-decoration: underline;
      }
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
