import { useState } from "react";
import { addEmployee } from "../services/api";

function CreateEmployeeModal({
  setShowEmployeeModal,
  reQuery,
  isLoading,
  setLoading,
  isError,
  setError,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name: name, age: parseInt(age), email: email };
    setLoading(true);
    try {
      await addEmployee(newEmployee);
      await reQuery();
      console.log(`${newEmployee} added!`);
      setShowEmployeeModal(false);
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
    setShowEmployeeModal(false);
  };

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <h2>Create Employee</h2>
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
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {isLoading && <div>Adding employee...</div>}
        {isError && <div>Failed to add employee...</div>}
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

export default CreateEmployeeModal;
