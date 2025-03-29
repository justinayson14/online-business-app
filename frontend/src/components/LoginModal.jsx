import React, { useState } from "react";

function LoginModal({ type, onClose, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) {
      console.error("onSubmit function is missing!");
      return;
    }
    console.log("Submitting:", username, password);
    onSubmit(username, password);
  };
  
    

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <h2>{type === "admin" ? "Admin Login" : "User Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
            style={inputStyle}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
          <button type="button" style={closeButtonStyle} onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

// Styles
const modalOverlay = {
  position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
};
const modalContent = {
  background: "#fff", padding: "20px", borderRadius: "8px", textAlign: "center", width: "300px"
};
const inputStyle = {
  width: "100%", padding: "10px", margin: "10px 0", fontSize: "16px"
};
const buttonStyle = {
  backgroundColor: "#007bff", color: "#fff", padding: "10px", border: "none", cursor: "pointer", width: "100%", marginTop: "10px"
};
const closeButtonStyle = {
  backgroundColor: "#ccc", color: "#000", padding: "10px", border: "none", cursor: "pointer", width: "100%", marginTop: "10px"
};

export default LoginModal;