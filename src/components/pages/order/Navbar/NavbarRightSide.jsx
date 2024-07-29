/* eslint-disable react/prop-types */
// import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import UserMenu from "./UserMenu";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";

export default function NavbarRightSideIncomplet({ username }) {
  // STATE
  const [isAdminMode, setIsAdminMode] = useState(false);

  // BEHAVIOR
  const displayToastNotification = () => {
    setIsAdminMode(!isAdminMode);
    if (!isAdminMode) {
      toast.info("Mode admin activé", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // RENDER
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdminMode}
        onToggle={displayToastNotification}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <UserMenu username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  /* toast container */
  .toaster {
    max-width: 300px;
  }

  /* toast body */
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    /* icon */
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    /* icon + text */
    div {
      line-height: 1.3em;
    }
  }
`;
