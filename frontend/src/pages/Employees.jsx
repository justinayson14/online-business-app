import { Grid, Stack, Typography, Container, Button } from "@mui/material";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { getEmployees, searchEmployees } from "../services/api";
import EmployeeCard from "../components/EmployeeCard";
import CreateEmployeeModal from "../components/CreateEmployeeModal";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddEmpModal, setShowAddEmpModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadAllEmployees = async () => {
    try {
      const allEmployees = await getEmployees();
      setEmployees(allEmployees);
    } catch (error) {
      console.log(error);
      setError("Failed to load employees...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAllEmployees();
  }, []);

  const handleAddEmployeeClick = (e) => {
    e.preventDefault();
    if (showAddEmpModal) setShowAddEmpModal(false);
    else setShowAddEmpModal(true);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchEmployees(searchQuery);
      setEmployees(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search employee...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="employees">
      <Stack spacing={6} sx={{ alignItems: "center" }}>
        <NavBar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        ></NavBar>
        {error && <Typography variant="h4">Error! {error}</Typography>}
        {loading && <Typography variant="h4">Loading...</Typography>}
        {showAddEmpModal && (
          <CreateEmployeeModal
            setShowEmployeeModal={setShowAddEmpModal}
            reQuery={loadAllEmployees}
            isLoading={loading}
            setLoading={setLoading}
          />
        )}
        <Button variant="outlined" onClick={handleAddEmployeeClick}>
          Add Employee
        </Button>
        <Grid container className="product-grid" spacing={2}>
          {employees.map((employee) => (
            <Grid key={employee.name}>
              <EmployeeCard
                employee={employee}
                reQuery={loadAllEmployees}
                isLoading={loading}
                setLoading={setLoading}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Employees;
