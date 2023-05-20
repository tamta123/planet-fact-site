// import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./components/planets";
import Header from "./components/header";
import backgroundImage from "../public/assets/background-stars.svg";

function App() {
  const rootStyle = {
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div id="root" style={rootStyle}>
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
