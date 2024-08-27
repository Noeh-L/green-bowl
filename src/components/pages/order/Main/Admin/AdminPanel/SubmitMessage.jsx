import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import styled from "styled-components";

function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className="icon" />
      <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  color: ${theme.colors.success};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};

  .icon {
    border: 1px solid ${theme.colors.success};
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
  span {
    font-size: ${theme.fonts.P0};
  }
`;

export default SubmitMessage;
