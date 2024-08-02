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
      {/* <div className="basket">Panier</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode && <AdminPanel />}
      </div>
    </MainSyled>
  );
}

const MainSyled = styled.div`
  display: flex;
  overflow: hidden;

  .basket {
    background: teal;
    width: 25%;
  }

  .menu-and-admin {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    display: flex;
    overflow: hidden;
    position: relative;
    flex: 1;
  }
`;

export default Main;
