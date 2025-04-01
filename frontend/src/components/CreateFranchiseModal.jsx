import { useState } from "react";
import { addFranchises } from "../services/api";

function CreateFranchiseModal({
  setShowFranchiseModal,
  reQuery,
  isLoading,
  setLoading,
  isError,
  setError,
}) {
  const [streetAddress, setStreetAddress] = useState("");
  const [cityState, setCityState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFranchise = {
      name: name,
      street_address: streetAddress,
      city_state: cityState,
      zipcode: zipCode,
      image: image,
    };
    setLoading(true);
    try {
      await addFranchises(newFranchise);
      await reQuery();
      console.log(`${newFranchise} added!`);
      setShowFranchiseModal(false);
      setError(null);
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(error);
    } finally {
      setLoading(false);
    }
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
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
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
          <button type="submit" style={buttonStyle}>
            Create
          </button>
          <button type="button" style={closeButtonStyle} onClick={handleCancel}>
            Cancel
          </button>
        </form>
        {isLoading && <div>Adding franchise...</div>}
        {isError && <div>Failed to add franchise...</div>}
      </div>
    </div>
  );
}

// Styles
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};
const modalContent = {
  background: "inherit",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "300px",
};
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  fontSize: "16px",
};
const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px",
  border: "none",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};
const closeButtonStyle = {
  backgroundColor: "#ccc",
  color: "#000",
  padding: "10px",
  border: "none",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};

export default CreateFranchiseModal;
