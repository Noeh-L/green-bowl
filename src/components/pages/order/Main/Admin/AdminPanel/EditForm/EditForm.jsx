import { useOrderContext } from "../../../../../../../context/OrderPageContext";
import InfoEditMessage from "./InfoEditMessage";
import Form from "../Form";

function EditForm() {
  // state
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    editProductTitleRef,
  } = useOrderContext();

  // event handlers (gestionnaire d'évenement)
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated); // update the form
    handleEditProduct(productBeingUpdated); // update the menu
  };

  // render
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      ref={editProductTitleRef}
    >
      <InfoEditMessage />
    </Form>
  );
}

export default EditForm;
