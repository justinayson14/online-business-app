// components/LoginToolBar.js
import React from "react";

function LoginToolbar() {
  return (
    <div style={toolbarStyles}>
      <h2>LoginToolbar</h2>
      <button style={buttonStyles}>Login</button>
    </div>
  );
}

// Adding inline styles for the toolbar and buttons
const toolbarStyles = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonStyles = {
  backgroundColor: "#555",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "16px",
};

export default LoginToolbar;