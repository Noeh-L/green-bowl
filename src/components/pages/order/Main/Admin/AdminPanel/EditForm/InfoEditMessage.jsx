import styled from "styled-components";
import { theme } from "../../../../../../../theme";

function InfoEditMessage() {
  return (
    <InfoEditMessageStlyled>
      Cliquer sur un produit du menu pour le modifier&nbsp;
      <span className="on-live">en temps réel</span>
    </InfoEditMessageStlyled>
  );
}

const InfoEditMessageStlyled = styled.div`
  grid-column: 2 / 5;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  white-space: nowrap;

  .on-live {
    text-decoration: underline;
  }
`;

export default InfoEditMessage;
