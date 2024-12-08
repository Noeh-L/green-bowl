import { Bounce, toast } from "react-toastify";

export const displayToast = (type, label, duration) => {
  if (toast[type]) {
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
  } else if (type === "") {
    toast.info(label, {
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
  } else {
    console.log(`Type de toast invalide : ${type}`);
  }
};
