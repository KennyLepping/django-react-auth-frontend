import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function NavBar() {
//   const [user, setUser] = useState("");
//   if (localStorage.getItem("user") !== null) {
//     setUser(JSON.parse(localStorage.getItem("user")));
//   }
  return (
    <ul className="flex ml-14 my-10 absolute">
      <li className="mr-6">
        <Link to="login" className="text-blue-500 hover:text-blue-800" href="#">
          Login
        </Link>
      </li>
      <li className="mr-6">
        <Link
          to="register"
          className="text-blue-500 hover:text-blue-800"
          href="#"
        >
          Register
        </Link>
      </li>
      <li className="mr-6 text-blue-500 hover:text-blue-800"><Logout /></li>
      {/* {user !== "" && <li className="mr-6">Logged in as {user.username}</li>} */}
    </ul>
  );
}
