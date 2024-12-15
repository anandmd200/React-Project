const Header = () => {
  const headerStyles = {
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    fontSize: "2.5rem",
    margin: "0",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const subtitleStyles = {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#f0f0f0",
  };

  return (
    <header style={headerStyles}>
      <h1 style={titleStyles}>Scientist List</h1>
      <p style={subtitleStyles}>
        Explore the most influential scientists in history and their
        contributions to the world of science.
      </p>
    </header>
  );
};

export default Header;
