import styled from "styled-components";
import { theme } from "../../theme";

function Tab({ Icon, label, onClick, isActive }) {
  return (
    <TabStyled $isLabel={label} $isActive={isActive} onClick={onClick}>
      {Icon && <Icon className="icon" />}
      <p className="title">{label}</p>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  font-family: "Open sans";
  min-width: 60px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $isLabel }) => ($isLabel ? theme.spacing.sm : 0)};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  padding: 10px 22px;
  cursor: pointer;

  background: ${({ $isActive }) =>
    $isActive ? `${theme.colors.background_dark}` : `${theme.colors.white}`};
  color: ${({ $isActive }) =>
    $isActive ? `${theme.colors.white}` : `${theme.colors.greySemiDark}`};
  border: 1px solid
    ${({ $isActive }) =>
      $isActive
        ? `${theme.colors.background_dark}`
        : `${theme.colors.greyLight}`};

  .icon {
    font-size: ${theme.fonts.SM};
  }

  .title {
    font-size: ${theme.fonts.P0};
  }

  &:hover {
    position: relative;

    /* Make the border bottom disappear on hover */
    ${({ $isActive }) =>
      !$isActive &&
      `&::after {
      content: '';
      position: absolute;
      bottom: -1.8px;
      height: 1.8px;
      width: 100%;
      background: white;
    }`}

    .title {
      text-decoration: underline;
    }
  }
`;

export default Tab;
