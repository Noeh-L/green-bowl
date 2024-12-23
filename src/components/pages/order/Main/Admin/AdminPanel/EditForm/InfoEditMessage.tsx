import styled from "styled-components";
import { theme } from "@/theme/theme";

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
  display: inline-block;
  align-items: center;
  color: ${theme.colors.primary};

  .on-live {
    text-decoration: underline;
  }
`;

export default InfoEditMessage;
