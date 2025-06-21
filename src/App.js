import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const appStyle = {
    backgroundColor: darkMode ? "#121212" : "#FFF",
    color: darkMode ? "#FFF" : "#000",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    minHeight: "60vh",
  };

  const scrollbarStyle = `
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #089da1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  `;

  const scrollToTopStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#089da1",
    color: "#FFF",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={appStyle}>
      <style>{scrollbarStyle}</style>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RouterApp />
        <Footer />
      </BrowserRouter>
      {showScroll && (
        <button style={scrollToTopStyle} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
