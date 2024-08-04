/* eslint-disable react/prop-types */
import { theme } from "../../../../theme";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import UserMenu from "./UserMenu";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ToastAdmin from "../../../reusable-ui/ToastAdmin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import { useParams } from "react-router-dom";

export default function NavbarRightSide() {
  // STATE
  const { username } = useParams();
  const { isAdminMode, setIsAdminMode } = useOrderContext();

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
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
`;
