/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput.jsx";
import { useState } from "react";
import { theme } from "../../../../../theme/index.js";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
import { useOrderContext } from "../../../../../context/OrderPageContext.jsx";
import { FiCheck } from "react-icons/fi";
import { getTextInputsConfig } from "./textInputsConfig.js";
import ImagePreview from "./ImagePreview.jsx";

function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } = useOrderContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // BEHAVIOR
  const textInputs = getTextInputsConfig(newProduct);
  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Création du nouveau produit (objet)
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    // 2. Mise à jour de notre menu
    handleAddProduct(newProductToAdd);

    // 3. Réinitialisation du formulaire

    setNewProduct(EMPTY_PRODUCT);

    // 4. Message de notification de succès !
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // RENDER
  return (
    <AddFormStyled onSubmit={handleSubmit}>
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
        />
      ))}

      <div className="addButton-and-message">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"addButton"}
        />
        {isSubmitted && (
          <div className="message">
            <FiCheck className="icon" />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template: repeat(4, 35px) / repeat(4, 200px);
  grid-row-gap: ${theme.spacing.xs};
  grid-column-gap: ${theme.spacing.md};

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

export default AddForm;