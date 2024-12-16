import { Bounce, toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning" | "";

export const displayToast = (
  type: ToastType,
  label: string,
  duration: number,
) => {
  if (type === "") {
    return toast.info(label, {
      position: "bottom-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      icon: false,
    });
  }

  toast[type](label, {
    position: "bottom-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};
