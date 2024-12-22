import Button from "@/components/reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

type SubmitButtonProps = {
  isSubmitted: boolean;
};

function SubmitButton({ isSubmitted }: SubmitButtonProps) {
  return (
    <>
      <Button label={"Ajouter un nouveau produit au menu"} version="success" />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}

export default SubmitButton;
