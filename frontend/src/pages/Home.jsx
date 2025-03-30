/* eslint-disable no-unused-vars */
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        const allProducts = await getProducts()
        setProducts(allProducts)
      } catch (err) {
        console.log(err)
        setError("Failed to load products...")
      } finally {
        setLoading(false)
      }
    }

    loadAllProducts();
  }, [])



  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="products-grid">
        {products.map(
          (product) =>
            <ProductCard product={product} />
        )}
      </div>
    </div>
  );
}

export default Home;
