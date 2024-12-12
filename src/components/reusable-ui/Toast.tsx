import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "@/theme";

function Toast() {
  return <ToastContainerStyled bodyClassName="body-toast" />;
}

export default Toast;

const ToastContainerStyled = styled(ToastContainer)`
  /* toast container */
  max-width: 300px;

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
