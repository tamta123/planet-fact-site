// import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./components/planets";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/Neptune" />} />
        {/* Navigate component from react-router-dom, which allows us to 
        programmatically navigate to a specific route. */}
        <Route path="/:name" element={<Planets isMenuOpen={isMenuOpen} />} />
      </Routes>
    </div>
  );
}

export default App;
