// import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./components/planets";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Neptune" />} />
        {/* Navigate component from react-router-dom, which allows us to 
        programmatically navigate to a specific route. */}
        <Route path="/:name" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
