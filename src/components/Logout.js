import axiosInstance from "../apis/axiosInstance";
import { useNavigate } from "react-router-dom";

// Kenny added this component for logging out a user
export default function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    const response = axiosInstance.post("/users/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("");
  }
  return <div onClick={handleLogout}>
    {/* <span className="las la-id-card"></span> */}
    <button>Logout</button>
  </div>;
}