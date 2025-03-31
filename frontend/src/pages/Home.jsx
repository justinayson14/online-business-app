/* eslint-disable no-unused-vars */
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { getProducts, searchProducts } from "../services/api";
import { Grid, Container, Stack } from "@mui/material";
import Navbar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
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

    loadAllProducts();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchProducts(searchQuery)
      setProducts(searchResults)
      setError(null)
    } catch (err) {
      console.log(err)
      setError("Failed to search product...")
    } finally {
      setLoading(false)
    }
  };

  const handleLoginClick = (e) => {
    if (showLoginModal)
      setShowLoginModal(false)
    else
      setShowLoginModal(true)
  }

  return (
    <Container className="home">
      <Stack spacing={6}>
        <Navbar setSearchQuery={setSearchQuery} handleSearch={handleSearch} handleLoginClick={handleLoginClick}></Navbar>
        {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal}/>}
        {error && <div className="error-message">{error}</div>}
        <Grid container className="product-grid" spacing={2}>
          {products.map((product) => (
            <Grid key={product.id.timestamp}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Home;
