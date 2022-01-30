import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";

export default function Login() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${formData.username}\nPassword: ${formData.password}`
    );
    axiosInstance
      .post(`token/`, {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");

        // Store the user in localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/dashboard");
      });
  };

  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 w-1/2 m-auto">
          <p className="text-center text-3xl">Welcome.</p>
          <form onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="Your Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              defaultValue="Log In"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >
              Login
            </button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                href="register.html"
                className="underline font-semibold"
              >
                Register here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
