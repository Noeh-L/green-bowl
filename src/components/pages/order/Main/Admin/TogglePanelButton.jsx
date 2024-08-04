import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { theme } from "../../../../../theme/";

function TogglePanelButton({ isPanelOpen, onClick }) {
  return (
    <TogglePanelButtonStyled $isVisible={isPanelOpen} onClick={onClick}>
      <FiChevronDown className="icon" />
    </TogglePanelButtonStyled>
  );
}

const TogglePanelButtonStyled = styled.div`
  min-width: 60px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $isLabel }) => ($isLabel ? theme.spacing.sm : 0)};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  padding: 10px 22px;
  cursor: pointer;

  background: ${({ $isVisible }) =>
    $isVisible ? `${theme.colors.white}` : `${theme.colors.background_dark}`};
  color: ${({ $isVisible }) =>
    $isVisible ? `${theme.colors.greySemiDark}` : `${theme.colors.white}`};

  border: 1px solid
    ${({ $isVisible }) =>
      $isVisible
        ? `${theme.colors.greyLight}`
        : `${theme.colors.background_dark}`};

  .icon {
    font-size: ${theme.fonts.SM};
    transform: ${({ $isVisible }) => ($isVisible ? "none" : "rotate(180deg)")};
  }

  &:hover {
    position: relative;

    /* Make the border bottom disappear on hover */
    ${({ $isVisible }) =>
      $isVisible &&
      `&::after {
      content: '';
      position: absolute;
      bottom: -1.8px;
      height: 1.8px;
      width: 100%;
      background: white;
    }`}
  }
`;

export default TogglePanelButton;
