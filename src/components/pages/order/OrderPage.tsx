import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "@/theme/theme";
import OrderContextProvider from "@/context/OrderPageContext";
import gbPattern from "/assets/gb-pattern.png";

function OrderPage() {
  return (
    <OrderContextProvider>
      <OrderPageStyled>
        <div className="background"></div>
        <main>
          <Navbar />
          <Main />
        </main>
      </OrderPageStyled>
    </OrderContextProvider>
  );
}

const OrderPageStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: linear-gradient(${theme.colors.primary}); */
  background: linear-gradient(
    155deg,
    rgba(68, 201, 121, 1) 0%,
    rgba(57, 221, 122, 1) 35%,
    rgba(2, 251, 164, 1) 100%
  );

  & .background {
    background-image: url(${gbPattern});
    background-size: 90px;
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  main {
    background: white;
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};

    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: ${theme.shadows.medium};

    z-index: 1;
  }
`;

export default OrderPage;
