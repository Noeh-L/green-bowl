import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import IsAdminModeContextProvider from "../../../context/IsAdminContext";
import IsPanelAdminOpenProvider from "../../../context/IsPanelAdminOpen";
import ActiveTabContextProvider from "../../../context/ActiveTabContext";

function OrderPage() {
  // STATE
  const { username } = useParams();

  // RENDER
  return (
    <IsAdminModeContextProvider>
      <IsPanelAdminOpenProvider>
        <ActiveTabContextProvider>
          <OrderPageStyled>
            <div className="background"></div>
            <main>
              <Navbar username={username} />
              <Main />
            </main>
          </OrderPageStyled>
        </ActiveTabContextProvider>
      </IsPanelAdminOpenProvider>
    </IsAdminModeContextProvider>
  );
}

const OrderPageStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & .background {
    background: ${theme.colors.primary};
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  main {
    background: white;
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};

    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export default OrderPage;
