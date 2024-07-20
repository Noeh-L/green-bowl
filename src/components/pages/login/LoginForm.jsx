import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import Input from "../../reusable-ui/Input";

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
          <Input
            value={inputValue}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            Icon={<BsPersonCircle className="icon" />}
          />
          <button className="cta__action-button">
            Accéder à mon espace
            <FaChevronRight className="chevron-icone" />
          </button>
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

      &-button {
        background: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${theme.spacing.sm};
        padding: ${theme.spacing.md};
        border-radius: ${theme.borderRadius.round};
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.white};
        font-weight: ${theme.weights.semiBold};
        font-family: "Open sans", sans-serif;
        cursor: pointer;
        transition: background 0.15s ease-in-out;

        & .chevron-icone {
          font-size: ${theme.fonts.XS};
        }

        &:hover {
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
        }
        &:active {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
    }
  }
`;

export default LoginForm;
