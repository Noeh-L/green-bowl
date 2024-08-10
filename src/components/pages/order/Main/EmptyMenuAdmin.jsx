import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

function EmptyMenuAdmin() {
  return (
    <EmptyMenuAdminStyled>
      <h2>Le menu est vide ?</h2>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        className={"generateProductButton"}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2,
  p {
    font-family: "Amatic SC";
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }

  .generateProductButton {
    font-size: ${theme.fonts.XS};
    margin-top: ${theme.spacing.md};
  }
`;

export default EmptyMenuAdmin;
