/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useIsAdminModeContext } from "../../../../context/IsAdminContext";
import Menu from "./Menu";

function Main() {
  const { isAdminMode, setIsAdminMode } = useIsAdminModeContext();

  return (
    <MainSyled>
      <div className="basket">Panier</div>
      <Menu />
      {isAdminMode && <AdminPanel />}
    </MainSyled>
  );
}

const MainSyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  overflow: hidden;
  position: relative;

  .basket {
    background: teal;
  }
`;

export default Main;
