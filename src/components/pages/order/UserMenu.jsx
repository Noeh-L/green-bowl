/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";

function UserMenu({ username }) {
  return (
    <UserMenuStyled>
      <div className="username-and-logout">
        <h2>
          Hey, <span>{username}</span>
        </h2>
        <Link to={"/"} className="logout-button">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="user-picture" />
    </UserMenuStyled>
  );
}

const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-family: "Open sans", sans-serif;

  .username-and-logout {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: ${theme.spacing.xxs};

    h2 {
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.greyDark};
      font-weight: ${theme.weights.regular};

      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};
      }
    }

    .logout-button {
      background: none;
      border: none;
      font-size: ${theme.fonts.XXS};
      color: ${theme.colors.greyDark};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .user-picture {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyDark};
  }
`;

export default UserMenu;
