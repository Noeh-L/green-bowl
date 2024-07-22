import styled from "styled-components";
import { theme } from "../../../theme";

function Main() {
  return <MainSyled></MainSyled>;
}

const MainSyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;

export default Main;
