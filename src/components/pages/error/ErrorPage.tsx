import Button from "@/components/reusable-ui/Button";
import { theme } from "@/theme/theme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import gbPattern from "../../../../public/assets/gb-pattern.png";

function ErrorPage() {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate("/");
  };
  return (
    <ErrorPageStyled>
      <div className="background"></div>
      <main>
        <h1 className="error-title">Erreur 404</h1>
        <div className="error-img">
          <img
            src="../../../../public/assets/bowl-illustration.png"
            alt="Bol de salade"
          />
        </div>
        <Button
          label="Retourner à la page d'accueil"
          onClick={redirectToLoginPage}
          className="go-back-button"
        />
      </main>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
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
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    overflow: hidden;
    box-shadow: ${theme.shadows.medium};
    z-index: 1;

    .error-title {
      font-size: ${theme.fonts.P6};
      font-family: ${theme.family.stylish};
      color: ${theme.colors.white};
      letter-spacing: 15px;
      text-transform: uppercase;
    }

    .error-img {
      width: 300px;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    .go-back-button {
      width: fit-content;
      box-shadow: ${theme.shadows.subtle};
    }
  }
`;

export default ErrorPage;
