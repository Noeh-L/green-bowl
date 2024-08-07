import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput.jsx";
import { useState } from "react";
import { theme } from "../../../../../theme/index.js";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  // const [newProduct, setNewProduct] = useState({
  //   title: "",
  //   imageLink: "",
  //   price: 0,
  // });

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
    const newProductJustAdded = {
      name,
      image,
      price,
    };
    console.log(newProductJustAdded);
  };

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
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        className={"add-button"}
      />
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

  .add-button {
    grid-column: 2 / 4;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    background: #60bd4f;
    border: 1px solid #60bd4f;
    font-size: 14px;

    &:hover {
      background: white;
      color: #60bd4f;
    }
  }
`;

export default AddProduct;
