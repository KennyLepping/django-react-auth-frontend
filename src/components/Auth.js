import Login from "./Login";
import Register from "./Register";
import ImageSection from "./ImageSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Auth() {
  return (
    <div className="w-full flex flex-wrap">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ImageSection />
    </div>
  );
}
