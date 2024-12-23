import { useOrderContext } from "@/context/OrderPageContext";
import InfoEditMessage from "./InfoEditMessage";
import Form from "../Form/Form";
import { useState } from "react";
import UpdateMessage from "./UpdateMessage";
import { EMPTY_PRODUCT } from "@/enums/product";
import { getInputsConfig } from "../Form/inputsConfig";

function EditForm() {
  // state
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    editProductTitleRef,
  } = useOrderContext();

  const [valueOnFocus, setValueOnFocus] = useState();
  const [isEditOccured, setIsEditOccured] = useState(false);

  // event handlers (gestionnaire d'évenement)
  const handleChange = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (!("name" in e.target)) return; // if "name" is undefined in "e.target" then return
    const { value, name } = e.target;

    // get an array of the keys "names" of all select inputs in inputConfig.ts
    const booleanInputs = getInputsConfig(EMPTY_PRODUCT)
      .filter((input) => input.options)
      .map((input) => input.name);

    const productBeingUpdated = {
      ...productSelected,
      [name]: booleanInputs.includes(name) ? value === "true" : value, // send boolean to the DB instead of a string (true instead of "true")
    };

    setProductSelected(productBeingUpdated); // update the form
    handleEditProduct(productBeingUpdated); // update the menu
  };

  const handleFocus = (
    e:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLFormElement, Element>,
  ) => {
    const valueOnFocus = e.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLFormElement, Element>,
  ) => {
    const valueOnBlur = e.target.value;

    if (valueOnFocus !== valueOnBlur) {
      setIsEditOccured(true);
    }

    // réinitialisation à false pour faire disparaitre la notif
    setTimeout(() => setIsEditOccured(false), 2000);
  };

  // render
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={editProductTitleRef} // @TO-DO: it causes animation bug when a card is selected and panel is mounting
    >
      {isEditOccured ? <UpdateMessage /> : <InfoEditMessage />}
    </Form>
  );
}

export default EditForm;
