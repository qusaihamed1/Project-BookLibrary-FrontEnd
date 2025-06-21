import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/arrivals", label: "Arrivals" },
    { to: "/featured", label: "Featured" },
    { to: "/reviews", label: "Reviews" },
  ];

  const navbarStyle = {
    boxShadow: "0 0 8px #089da1",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
    fontFamily: "cursive",
    backgroundColor: darkMode ? "#121212" : "#f8f9fa",
    color: darkMode ? "#FFF" : "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  };

  const navContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
    margin: "0",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: darkMode ? "#FFF" : "#000",
    backgroundColor: "transparent",
    borderRadius: "10px",
    padding: "5px 10px",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  const navLinkHoverStyle = {
    backgroundColor: "#089da1",
    color: "#fff",
  };

  const iconButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "8px 16px",
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/">
          <img
            src="/images/icon.png"
            alt="Book Icon"
            style={{ width: "70px", height: "50px" }}
          />
        </Link>
      </div>
      <div style={navContainerStyle}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            style={{
              ...navLinkStyle,
              ...(hoverIndex === index ? navLinkHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={toggleDarkMode} style={iconButtonStyle}>
          {darkMode ? (
            <i className="fas fa-sun" style={{ fontSize: "24px", color: "#FFEB3B" }}></i>
          ) : (
            <i className="fas fa-moon" style={{ fontSize: "24px", color: "#FFEB3B" }}></i>
          )}
        </button>
        <button onClick={toggleLoginModal} style={iconButtonStyle}>
          <i className="fas fa-user" style={{ fontSize: "24px", color: "#089da1" }}></i>
        </button>
      </div>

      {showLogin && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1001",
          }}
          onClick={toggleLoginModal}
        >
          <div
            style={{
              width: "400px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.8em",
                marginBottom: "20px",
                color: "#089da1",
              }}
            >
              Welcome Back
            </h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "1em",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "1em",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#089da1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1.2em",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: "#777",
              }}
            >
              Don't have an account?{" "}
              <span
                style={{
                  color: "#089da1",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => {
                }}
              >
                Sign Up
              </span>
            </p>
            <button
              onClick={toggleLoginModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5em",
                cursor: "pointer",
                color: "#ccc",
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
