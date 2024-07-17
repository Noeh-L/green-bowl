import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { FaCircleUser, FaChevronRight } from "react-icons/fa6";

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
          <label className="cta__action-input">
            <FaCircleUser className="user-icone" />
            <input
              type="text"
              placeholder="Entrez votre prénom"
              onChange={handleChange}
              value={inputValue}
              required
            />
          </label>
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

      &-input {
        background: ${theme.colors.white};
        display: flex;
        align-items: center;
        gap: ${theme.spacing.sm};
        padding: ${theme.spacing.md};
        border-radius: ${theme.borderRadius.round};

        & .user-icone {
          color: ${theme.colors.greyBlue};
          font-size: ${theme.fonts.P0};
        }

        input {
          background: none;
          border: none;
          color: ${theme.colors.dark};
          width: 100%;
          height: 100%;
          font-size: ${theme.fonts.P0};
          font-family: "Open sans", sans-serif;
          font-weight: ${theme.weights.medium};

          &::placeholder {
            color: #d3d3d3;
          }
        }
      }

      &-button {
        background: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger};
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
          color: ${theme.colors.primary_burger};
        }
        &:active {
          background: ${theme.colors.primary_burger};
          color: ${theme.colors.white};
        }
      }
    }
  }
`;

export default LoginForm;
