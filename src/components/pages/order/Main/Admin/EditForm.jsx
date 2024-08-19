import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function EditForm() {
  // state
  const { menu, idCardSelected, updateProductInMenu } = useOrderContext();

  const productSelected = menu.find((item) => item.id === idCardSelected);

  // behavior
  const handleEditProduct = (e) => {
    const { value, name } = e.target;
    const productUpdated = { ...productSelected, [name]: value };

    updateProductInMenu(productUpdated);
  };

  // render
  return (
    <EditFormStyled>
      {idCardSelected ? (
        <div className="editForm">
          <img src={productSelected.imageSource} />

          <input
            type="text"
            value={productSelected.title}
            onChange={handleEditProduct}
            name="title"
          />
          <input
            type="text"
            value={productSelected.imageSource}
            onChange={handleEditProduct}
            name="imageSource"
          />
          <input
            type="text"
            value={productSelected.price}
            onChange={handleEditProduct}
            name="price"
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
