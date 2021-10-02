import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToastify = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 3000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const errorToastify = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 3000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
