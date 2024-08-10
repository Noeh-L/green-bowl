import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput.jsx";
import { useState } from "react";
import { theme } from "../../../../../theme/index.js";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { useOrderContext } from "../../../../../context/OrderPageContext.jsx";
import { FiCheck } from "react-icons/fi";

function AddProduct() {
  // STATE
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { menu, setMenu } = useOrderContext();

  // BEHAVIOR
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const idNewProduct = new Date().getTime();
    const imageIfEmpty = "../../../../../../public/assets/coming-soon.png";

    // New product to add in the menu
    const newProductJustAdded = {
      id: idNewProduct,
      title: name,
      imageSource: image === "" ? imageIfEmpty : image,
      price,
    };

    setMenu([newProductJustAdded, ...menu]);

    setName("");
    setImage("");
    setPrice("");

    console.log("Produit ajouté avec succès !");
  };

  // RENDER
  return (
    <AddProductStyled onSubmit={handleSubmit}>
      <div className="productPreview">
        {image ? <img src={image} alt={name} /> : <div>Aucune image</div>}
      </div>
      <TextInput
        value={name}
        onChange={handleNameChange}
        Icon={FaHamburger}
        placeholder={"Nom du produit (ex: Super Burger)"}
        className={"text-inputs"}
      />
      <TextInput
        value={image}
        onChange={handleImageChange}
        Icon={BsFillCameraFill}
        placeholder={
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        }
        className={"text-inputs"}
      />
      <TextInput
        value={price}
        onChange={handlePriceChange}
        Icon={MdOutlineEuro}
        placeholder={"Prix"}
        className={"text-inputs"}
      />
      <div className="addButton-and-message">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"addButton"}
        />
        <div className="message">
          <FiCheck className="icon" />
          <span>Ajouté avec succès !</span>
        </div>
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
