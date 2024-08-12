import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput.jsx";
import { useState } from "react";
import { theme } from "../../../../../theme/index.js";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
import { useOrderContext } from "../../../../../context/OrderPageContext.jsx";
import { FiCheck } from "react-icons/fi";
import { textInputsConfig } from "./textInputsConfig.js";
import imageIfEmptyField from "../../../../../../public/assets/coming-soon.png";

function AddProduct() {
  // STATE
  const { menu, setMenu } = useOrderContext();
  const [newProduct, setNewProduct] = useState({
    title: "",
    imageSource: "",
    price: 0,
  });
  const [showMessage, setShowMessage] = useState(false);

  // BEHAVIOR
  const textInputs = textInputsConfig(newProduct, setNewProduct);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Création du nouveau produit (objet)
    const idNewProduct = new Date().getTime();
    const newProductToAdd = {
      ...newProduct,
      id: idNewProduct,
      imageSource:
        newProduct.imageSource === ""
          ? imageIfEmptyField
          : newProduct.imageSource,
    };

    // 2. Mise à jour de notre menu
    setMenu([newProductToAdd, ...menu]);

    // 3. Réinitialisation du formulaire
    setNewProduct({ title: "", imageSource: "", price: 0 });

    // 4. Message de notification de succès !
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  // RENDER
  return (
    <AddProductStyled onSubmit={handleSubmit}>
      <div className="productPreview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune image</div>
        )}
      </div>

      {textInputs.map((textInput) => (
        <TextInput
          key={textInput.id}
          value={textInput.value}
          onChange={textInput.onChange}
          Icon={textInput.Icon}
          placeholder={textInput.placeholder}
          className={textInput.className}
        />
      ))}

      <div className="addButton-and-message">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"addButton"}
        />
        {showMessage && (
          <div className="message">
            <FiCheck className="icon" />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.form`
  display: grid;
  grid-template: repeat(4, 35px) / repeat(4, 200px);
  grid-row-gap: ${theme.spacing.xs};
  grid-column-gap: ${theme.spacing.md};

  .productPreview {
    grid-column: 1 / 2;
    grid-row: 1 / 4;

    div {
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
      color: ${theme.colors.greySemiDark};
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-inputs {
    background: ${theme.colors.background_white};
    padding: ${theme.spacing.xs} ${theme.spacing.md};

    grid-column: 2 / 5;

    .icon {
      color: ${theme.colors.greyBlue};
    }
    ::placeholder {
      font-weight: 400;
    }
    :focus {
      outline: 2px solid ${theme.colors.greyBlue};
      border-radius: 3px;
    }
  }

  .addButton-and-message {
    grid-column: 2 / 5;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};

    .addButton {
      width: fit-content;
      padding: ${theme.spacing.xs} ${theme.spacing.lg};
      background: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      font-size: 14px;
      height: 100%;
      font-size: ${theme.fonts.XS};

      &:hover {
        background: white;
        color: #60bd4f;
      }
    }

    .message {
      color: ${theme.colors.success};
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xxs};

      .icon {
        border: 1px solid ${theme.colors.success};
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
      span {
        font-size: ${theme.fonts.P0};
      }
    }
  }
`;

export default AddProduct;
