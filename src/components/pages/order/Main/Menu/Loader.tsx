import styled from "styled-components";
import { theme } from "@/theme/theme";

function Loader() {
  return <LoaderStyled>CHARGEMENT EN COURS ...</LoaderStyled>;
}

const LoaderStyled = styled.div`
  font-family: ${theme.family.stylish};
  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

export default Loader;
