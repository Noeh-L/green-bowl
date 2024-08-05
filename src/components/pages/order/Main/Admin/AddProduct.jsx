import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput.jsx";
import { FaBurger, FaCamera, FaEuroSign } from "react-icons/fa6";
import { useState } from "react";

function AddProduct() {
  const [productName, setProductName] = useState("");

  return (
    <AddProductStyled>
      <div className="productPreview">
        <img src="#" alt="#" />
      </div>
      <form action="post">
        <TextInput
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          Icon={FaBurger}
          placeholder={"Entrez le nom du produit (ex.: Supra Burgerz)"}
        />
        <TextInput
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          Icon={FaCamera}
          placeholder={"Entrez l'URL"}
        />
        <TextInput
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          Icon={FaEuroSign}
          placeholder={"Entrez le prix"}
        />
      </form>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  border: 1px solid blue;
  height: 100%;
  display: flex;
  gap: 1rem;

  .productPreview {
    border: 3px solid blue;
    height: 120px;
    width: 215px;
  }

  form {
    border: 3px solid red;
  }
`;

export default AddProduct;
