// components/UserToolBar.js
import React from "react";

function UserToolbar( { onLogout }) {
  return (
    <div style={toolbarStyles}>
      <h2>UserToolbar</h2>
      <button style={buttonStyles} onClick={onLogout}>User Logout</button>

      <button style={buttonStyles}>View Cart/Checkout</button>
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

export default UserToolbar;