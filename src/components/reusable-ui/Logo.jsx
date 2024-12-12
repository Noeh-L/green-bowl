/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "/assets/logo-orange.png";
import { theme } from "../../theme/index";
import PropTypes from "prop-types";

function Logo({ scale, ...extraProps }) {
  return (
    <TitleStyled scale={scale} {...extraProps}>
      <div>CRAZEE</div>
      <img src={logo} alt="Logo d'un burger" />
      <div>BURGER</div>
    </TitleStyled>
  );
}

const TitleStyled = styled.h1`
  font-family: ${theme.family.stylish};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 7px;
  letter-spacing: 1.5px;
  font-size: ${theme.fonts.P5};
  transform: scale(${({ scale }) => scale});

  img {
    height: 65px;
  }
`;

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
