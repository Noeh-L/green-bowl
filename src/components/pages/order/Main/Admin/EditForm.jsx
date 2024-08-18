import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function ModifyProduct() {
  // state
  const { menu, idCardSelected } = useOrderContext();

  // behavior
  const productToEdit = menu.find((item) => item.id === idCardSelected);

  // render
  return (
    <ModifyProductStyled>
      {productToEdit ? (
        console.log("productToEdit: ", productToEdit)
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
