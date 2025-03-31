import { useState } from "react";
import { useLoginContext } from "../contexts/LoginContext";

function LoginModal({ setShowLoginModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {status, login} = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
    if (status !== "invalid" || status !== null)
      setShowLoginModal(false)
    console.log("Submitting:", username, password, status);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowLoginModal(false)
  }
  
    

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <h2>Login</h2>
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
          <button type="button" style={closeButtonStyle}onClick={handleCancel}>Cancel</button>
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
  background: "inherit", padding: "20px", borderRadius: "8px", textAlign: "center", width: "300px"
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