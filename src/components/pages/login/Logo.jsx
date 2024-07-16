import styled from "styled-components";
import logo from "../../../assets/logo-orange.png";
import { theme } from "../../../theme/index.js";

function Logo() {
  return (
    <TitleStyled>
      <div>CRAZEE</div>
      <img src={logo} alt="Logo d'un burger" />
      <div>BURGER</div>
    </TitleStyled>
  );
}

const TitleStyled = styled.h1`
  font-family: "Amatic SC", sans-serif;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P6};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  img {
    height: 80px;
  }
`;

export default Logo;
