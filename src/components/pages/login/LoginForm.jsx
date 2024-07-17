import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

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
          <input
            type="text"
            placeholder="Entrez votre prénom"
            onChange={handleChange}
            value={inputValue}
            required
          />
          <button>Accéder à mon espace</button>
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
    background-color: ${theme.colors.primary_burger};
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
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: ${theme.spacing.sm};

      input,
      button {
        padding: ${theme.spacing.md} 24px;
        font-size: ${theme.fonts.P0};
        border-radius: ${theme.borderRadius.round};
        border: none;
        font-family: "Open sans", serif;
      }
    }
  }
`;

export default LoginForm;
