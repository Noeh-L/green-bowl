import Button from "../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button label={"Ajouter un nouveau produit au menu"} version="success" />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}

export default SubmitButton;
