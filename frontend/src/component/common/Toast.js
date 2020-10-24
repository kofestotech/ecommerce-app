import { toast } from "react-toastify";

function Toast(type, message) {
  if (type === "success") {
    return toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      fontSize: "20px",
    });
  } else if (type === "error") {
    return toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export default Toast;
