// components/AdminToolBar.js
import React from "react";

function AdminToolbar( { onLogout }) {
  return (
    <div style={toolbarStyles}>
      <h2>AdminToolbar</h2>
      <button style={buttonStyles} onClick={onLogout}> Admin Logout</button>
      <button style={buttonStyles}>Add Products</button>
      <button style={buttonStyles}>Add Franchises</button>
      <button style={buttonStyles}>Edit Product</button>
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

export default AdminToolbar;