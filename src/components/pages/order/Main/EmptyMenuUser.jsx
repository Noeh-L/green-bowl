import styled from "styled-components";
import { theme } from "../../../../theme";

function EmptyMenuUser() {
  return (
    <EmptyMenuUserStyled>
      <h2>Victime de notre succès ! :D</h2>
      <p>
        De nouvelles recettes sont en cours de préparation.
        <br />À très vite !
      </p>
    </EmptyMenuUserStyled>
  );
}

const EmptyMenuUserStyled = styled.div`
  font-family: "Amatic SC";
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.P4};

  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default EmptyMenuUser;
