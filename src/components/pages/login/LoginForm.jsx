import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { FaChevronRight } from "react-icons/fa6";

function LoginForm() {
  // STATE
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // BEHAVIOR
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  // RENDER
  return (
    <LoginFormStyled action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <span className="separator"></span>
      <div className="cta">
        <h2>Connectez-vous</h2>
        <div className="cta__action">
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            Icon={<BsPersonCircle className="icon" />}
          />
          <PrimaryButton
            label={"Accéder à mon espace"}
            Icon={<FaChevronRight className="icon" />}
          />
        </div>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  h1 {
    color: ${theme.colors.white};
    font-family: "Amatic SC", sans-serif;
    font-size: ${theme.fonts.P5};
  }

  .separator {
    width: 400px;
    height: 3px;
    background-color: #f56a2c;
  }

  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.sm};
    width: 100%;

    h2 {
      color: ${theme.colors.white};
      font-family: "Amatic SC", sans-serif;
      font-size: ${theme.fonts.P4};
    }

    &__action {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm};
    }
  }
`;

export default LoginForm;
