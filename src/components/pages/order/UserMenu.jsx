/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

function UserMenu({ username }) {
  return (
    <UserMenuStyled>
      <h2>Bonjour {username}</h2>
      <Link to={"/"}>
        <button>Se déconnecter</button>
      </Link>
    </UserMenuStyled>
  );
}

const UserMenuStyled = styled.div`
  border: 3px solid green;
`;

export default UserMenu;
