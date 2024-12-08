/* eslint-disable react/prop-types */
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import UserMenu from "./UserMenu";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ToastAdmin from "../../../reusable-ui/ToastAdmin";
import { useOrderContext } from "../../../../context/OrderPageContext";
import { useParams } from "react-router-dom";
import { focusOnRef } from "../../../../utils/focusOnRef";
import { displayToast } from "../../../../utils/displayToast";

export default function NavbarRightSide() {
  // STATE
  const { username } = useParams();
  const { isAdminMode, setIsAdminMode, editProductTitleRef } =
    useOrderContext();

  // BEHAVIOR
  const displayToastNotification = async () => {
    if (!isAdminMode) {
      displayToast("info", "Mode admin activé", 3000);
    }
    await setIsAdminMode(!isAdminMode);
    focusOnRef(editProductTitleRef);
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
