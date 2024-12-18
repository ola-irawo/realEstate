import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={subheadingStyle}>Page Not Found</p>
        <Link href="/" style={linkStyle}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#f8f9fa",
  padding: "1rem",
  boxSizing: "border-box", // Ensure the value is compatible with the expected type
};

const contentStyle: React.CSSProperties = {
  maxWidth: "600px",
  color: "#212529",
};

const headingStyle: React.CSSProperties = {
  fontSize: "6rem",
  margin: "0",
  fontWeight: 700,
};

const subheadingStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  margin: "1rem 0",
  color: "#6c757d",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};
