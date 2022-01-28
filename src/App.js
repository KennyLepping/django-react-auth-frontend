import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import ImageSection from "./components/ImageSection";
import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Auth />
      </BrowserRouter>
    </>
  );
}

export default App;
