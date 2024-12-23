import styled from "styled-components";
import { theme } from "@/theme";
import { BsCloudCheck } from "react-icons/bs";

function UpdateMessage() {
  return (
    <UpdateMessageStyled>
      <BsCloudCheck className="icon" />
      <div>Modifications enregistrées !</div>
    </UpdateMessageStyled>
  );
}

const UpdateMessageStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.blue};

  .icon {
    margin: 0 ${theme.spacing.xs};
    width: 18px;
  }
`;

export default UpdateMessage;
