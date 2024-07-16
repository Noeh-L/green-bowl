import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "./Logo";

function LoginPage() {
  // RENDER
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
