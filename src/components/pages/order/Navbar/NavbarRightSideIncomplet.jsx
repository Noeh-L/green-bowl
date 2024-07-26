/* eslint-disable react/prop-types */
// import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme";
// import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import UserMenu from "./UserMenu";

export default function NavbarRightSideIncomplet({ username }) {
  return (
    <NavbarRightSideIncompletStyled>
      <div className="admin-button">ADMIN BUTTON</div>
      <UserMenu username={username} />
      {/* <ToastContainer className="toaster" bodyClassName="body-toast" /> */}
    </NavbarRightSideIncompletStyled>
  );
}

const NavbarRightSideIncompletStyled = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  gap: 70px;

  .admin-button {
  }

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
