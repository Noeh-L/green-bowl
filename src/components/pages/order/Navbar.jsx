import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import UserMenu from "./UserMenu";

/* eslint-disable react/prop-types */
function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo scale={0.9} />
      <UserMenu username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
