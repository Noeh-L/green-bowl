import styled from "styled-components";
import logo from "../../../assets/logo-orange.png";
import { theme } from "../../../theme/index.js";
import PropTypes from "prop-types";

function Logo({ size }) {
  return (
    <TitleStyled fontSize={size}>
      <div>CRAZEE</div>
      <img src={logo} alt="Logo d'un burger" />
      <div>BURGER</div>
    </TitleStyled>
  );
}

const TitleStyled = styled.h1`
  font-family: "Amatic SC", sans-serif;
  color: ${theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  letter-spacing: 1.5px;

  img {
    height: calc(${({ fontSize }) => fontSize} + 30px);
  }
`;

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
