import styled from "styled-components";
import { theme } from "../../../../../../theme";

function InfoEditMessage() {
  return (
    <InfoEditMessageStlyled>
      Cliquer sur un produit du menu pour le modifier&nbsp;
      <span>en temps réel</span>
    </InfoEditMessageStlyled>
  );
}

const InfoEditMessageStlyled = styled.div`
  grid-column: 2 / 5;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};

  span {
    text-decoration: underline;
  }
`;

export default InfoEditMessage;
