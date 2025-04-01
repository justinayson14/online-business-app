import { Stack, Container, Typography, Button, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import { getFranchises, searchFranchises } from "../services/api";
import { useEffect, useState } from "react";
import CreateFranchiseModal from "../components/CreateFranchiseModal";
import FranchiseCard from "../components/FranchiseCard";

function Franchises() {
  const [franchises, setFranchises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddFranModal, setShowAddFranModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadAllFranchises = async () => {
    try {
      const allFranchises = await getFranchises();
      setFranchises(allFranchises);
    } catch (error) {
      console.log(error);
      setError("Failed to load franchises...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAllFranchises();
  }, []);

  const handleAddFranchiseClick = (e) => {
    e.preventDefault();
    if (showAddFranModal) setShowAddFranModal(false);
    else setShowAddFranModal(true);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchFranchises(searchQuery);
      setFranchises(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search franchise...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="franchises">
      <Stack spacing={6} sx={{ alignItems: "center" }}>
        <NavBar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        ></NavBar>
        {error && <Typography variant="h4">Error! {error}</Typography>}
        {loading && <Typography variant="h4">Loading...</Typography>}
        {showAddFranModal && (
          <CreateFranchiseModal
            setShowFranchiseModal={setShowAddFranModal}
            reQuery={loadAllFranchises}
            isLoading={loading}
            setLoading={setLoading}
            isError={error}
            setError={setError}
          />
        )}
        <Button variant="outlined" onClick={handleAddFranchiseClick}>
          Add Franchise
        </Button>
        <Grid container className="product-grid" spacing={2}>
          {franchises.map((franchise) => (
            <Grid key={franchise.streetAddress}>
              <FranchiseCard
                franchise={franchise}
                reQuery={loadAllFranchises}
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

export default Franchises;
