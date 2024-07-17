import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import background from "../../../assets/burger-background.jpg";
import { theme } from "../../../theme";

function LoginPage() {
  // RENDER
  return (
    <Container>
      <BackgroundContainer>
        <img src={background} alt="Burger et frites" />
        <Overlay></Overlay>
      </BackgroundContainer>
      <Logo size={"100px"} />
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.lg};
  position: relative;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0 0 0 / 0.7);
`;

export default LoginPage;
