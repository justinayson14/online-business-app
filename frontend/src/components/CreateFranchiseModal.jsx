import { useState } from "react";

function CreateFranchiseModal({ setShowFranchiseModal, addFranchise }) {
  const [streetAddress, setStreetAddress] = useState("");
  const [cityState, setCityState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFranchise = { streetAddress, cityState, zipCode, image };
    addFranchise(newFranchise);
    setShowFranchiseModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowFranchiseModal(false);
  };

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <h2>Create Franchise</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="City, State"
            value={cityState}
            onChange={(e) => setCityState(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Create</button>
          <button type="button" style={closeButtonStyle} onClick={handleCancel}>Cancel</button>
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

export default CreateFranchiseModal;
