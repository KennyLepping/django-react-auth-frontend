import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="flex ml-14 my-10 absolute">
      <li className="mr-6">
        <Link to="login" className="text-blue-500 hover:text-blue-800" href="#">
          Log in
        </Link>
      </li>
      <li className="mr-6">
        <Link to="register" className="text-blue-500 hover:text-blue-800" href="#">
          Register
        </Link>
      </li>
      <li className="mr-6">
          Logged in as ...
      </li>
    </ul>
  );
}
