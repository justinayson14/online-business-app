import { useState } from "react";
import { addProduct } from "../services/api";

function CreateProductModal({
  setShowProductModal,
  reQuery,
  isLoading,
  setLoading,
  isError,
  setError,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name: name, price: parseFloat(price), image: image };
    setLoading(true);
    try {
      await addProduct(newProduct);
      await reQuery();
      console.log(`${newProduct} added!`);
      setShowProductModal(false);
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
    setShowProductModal(false);
  };

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <h2>Create Product</h2>
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
            type="number"
            step="0.01"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Image"
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
        {isLoading && <div>Adding product...</div>}
        {isError && <div>Failed to add product...</div>}
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

export default CreateProductModal;
