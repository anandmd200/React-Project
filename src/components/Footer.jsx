export const Footer = () => {
  const footerStyles = {
    background: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    borderTop: "2px solid #6a11cb",
    // position: "absolute",
    // bottom: "0",
    width: "100%",
  };
  const titleStyles = {
    fontSize: "1.5rem",
    margin: "0",
    fontWeight: "bold",
  };
  const subtitleStyles = {
    fontSize: "1rem",
    marginTop: "5px",
    color: "#ccc",
  };

  return (
    <footer style={footerStyles}>
      <h1 style={titleStyles}>Scientist List Footer</h1>
      <p style={subtitleStyles}>
        © {new Date().getFullYear()} Scientist Hub. All rights reserved.
      </p>
    </footer>
  );
};
