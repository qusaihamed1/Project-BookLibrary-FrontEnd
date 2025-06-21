import React from "react";

const Services = () => {
  const servicesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    padding: "20px",
  };

  const serviceCardStyle = {
    width: "90%",
    maxWidth: "350px", 
    textAlign: "center",
    margin: "15px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    fontSize: "50px", 
    color: "#089da1",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "15px",
  };

  const descriptionStyle = {
    marginTop: "15px",
    fontSize: "18px",
    color: "#555",
  };

  return (
    <div style={servicesContainerStyle}>
      <div style={serviceCardStyle}>
        <i className="fa-solid fa-truck-fast" style={iconStyle}></i>
        <h3 style={titleStyle}>Fast Delivery</h3>
        <p style={descriptionStyle}>
          "We deliver your favorite books quickly and efficiently without any
          delays."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-headset" style={iconStyle}></i>
        <h3 style={titleStyle}>24 x 7 Services</h3>
        <p style={descriptionStyle}>
          "Our services are available 24/7 to meet your needs anytime."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-tag" style={iconStyle}></i>
        <h3 style={titleStyle}>Best Deal</h3>
        <p style={descriptionStyle}>
          "Get the best deals and offers on exclusive book collections."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-lock" style={iconStyle}></i>
        <h3 style={titleStyle}>Secure Payment</h3>
        <p style={descriptionStyle}>
          "We support secure payment methods to ensure a reliable shopping
          experience."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-book" style={iconStyle}></i>
        <h3 style={titleStyle}>Wide Selection</h3>
        <p style={descriptionStyle}>
          "Explore a wide variety of books across all genres and topics."
        </p>
      </div>
    </div>
  );
};

const Welcome = () => {
  const mainStyle = {
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    backgroundImage: "url('../Images/backgroundMain.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
  };

  const h1Style = {
    fontSize: "3.5rem", 
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#000",
  };

  const spanStyle = {
    color: "#089da1",
  };

  const pStyle = {
    width: "90%",
    maxWidth: "700px",
    fontSize: "1.5rem", 
    lineHeight: "1.8",
    color: "#333",
    margin: "20px 0",
  };

  const mainImgStyle = {
    display: "flex",
    flexWrap: "wrap", 
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
    width: "100%",
  };

  const imgStyle = {
    width: "200px",
    height: "200px", 
    objectFit: "cover",
    borderRadius: "10px",
    border: "3px solid white",
    transition: "all ease-in-out 0.5s",
    cursor: "pointer",
  };

  return (
    <section style={mainStyle}>
      <h1 style={h1Style}>
        WELCOME TO <br />
        <span style={spanStyle}>Book Haven</span>
      </h1>
      <p style={pStyle}>
        Welcome to our online bookstore, your first destination for the best
        books and novels of various genres.
      </p>
      <div style={mainImgStyle}>
        {["book 1-main.jpeg", "book 2-main.jpeg", "book 3-main.jpeg", "book 4-main.jpeg", "book 5-main.jpeg"].map(
          (image, index) => (
            <img
              key={index}
              src={`../Images/${image}`}
              alt={`Book ${index + 1}`}
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.width = "250px")}
              onMouseOut={(e) => (e.currentTarget.style.width = "200px")}
            />
          )
        )}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Welcome />
      <Services />
    </div>
  );
};

export default App;
