/* eslint-disable react-refresh/only-export-components */
import { useOrderContext } from "@/context/OrderPageContext";
import { EMPTY_PRODUCT } from "@/enums/product";
import Form from "../Form/Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "@/hooks/useSuccessMessage";
import { getInputsConfig } from "../Form/inputsConfig";

function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } = useOrderContext();
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  // BEHAVIOR
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Création du nouveau produit (objet)
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: Number(newProduct.price),
    };

    // 2. Mise à jour de notre menu
    handleAddProduct(newProductToAdd);

    // 3. Réinitialisation du formulaire

    setNewProduct(EMPTY_PRODUCT);

    // 4. Message de notification de succès !
    displaySuccessMessage();
  };

  const handleChange = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (!("name" in e.target)) return;

    const { name, value } = e.target;

    // get an array of the names of all select inputs. The product given in parameter doesn't matter.
    const booleanInputs = getInputsConfig(EMPTY_PRODUCT)
      .filter((input) => input.options)
      .map((input) => input.name);

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
