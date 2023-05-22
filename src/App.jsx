// import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./components/planets";
import Header from "./components/header";
import backgroundImage from "../public/assets/background-stars.svg";

function App() {
  const rootStyle = {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: "float 15s linear infinite", // Fixed animation value
  };
  return (
    <div id="container" style={rootStyle}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Neptune" />} />
        {/* Navigate component from react-router-dom, which allows us to 
        programmatically navigate to a specific route. */}
        <Route path="/:name" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
