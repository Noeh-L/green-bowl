/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import { useOrderContext } from "../../../../../../../context/OrderPageContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "../Form/Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";

function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    const booleanInputs = ["isAvailable", "isAdvertised"];

    setNewProduct({
      ...newProduct,
      [name]: booleanInputs.includes(name) ? value === "true" : value,
    });
  };

  // RENDER
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}

export default AddForm;
