/* eslint-disable no-unused-vars */
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { getProducts, searchProducts } from "../services/api";
import { Grid, Container, Stack, Button } from "@mui/material";
import Navbar from "../components/NavBar";
import LoginModal from "../components/LoginModal";
import { useLoginContext } from "../contexts/LoginContext";
import CreateProductModal from "../components/CreateProductModal";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { status } = useLoginContext();
  const [showAddProdModal, setShowAddProdModal] = useState(false);

  const loadAllProducts = async () => {
    try {
      const allProducts = await getProducts();
      setProducts(allProducts);
    } catch (err) {
      console.log(err);
      setError("Failed to load products...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAllProducts();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchProducts(searchQuery);
      setProducts(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search product...");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = (e) => {
    if (showLoginModal) setShowLoginModal(false);
    else setShowLoginModal(true);
  };

  const handleAddProdClick = (e) => {
    if (showAddProdModal) setShowAddProdModal(false);
    else setShowAddProdModal(true);
  };

  return (
    <Container className="home">
      <Stack spacing={6} sx={{ alignItems: "center" }}>
        <Navbar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          handleLoginClick={handleLoginClick}
        ></Navbar>
        {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
        {showAddProdModal && (
          <CreateProductModal
            setShowProductModal={setShowAddProdModal}
            reQuery={loadAllProducts}
            isLoading={loading}
            setLoading={setLoading}
            isError={error}
            setError={setError}
          />
        )}
        {error && <div className="error-message">{error}</div>}
        {status === "admin" && (
          <Button variant="outlined" onClick={handleAddProdClick}>
            Add Product
          </Button>
        )}
        <Grid container className="product-grid" spacing={2}>
          {products.map((product) => (
            <Grid key={product.name}>
              <ProductCard
                product={product}
                reQuery={loadAllProducts}
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

export default Home;
