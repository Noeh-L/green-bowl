/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Button from "../../../../../reusable-ui/Button.jsx";
import { useOrderContext } from "../../../../../../context/OrderPageContext.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";
import Form from "./Form.jsx";

function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } = useOrderContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // BEHAVIOR
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
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  );
}

export default AddForm;
