import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Keyboard", price: "$20" },
    { id: 2, name: "Mouse", price: "$10" },
  ];

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
            (
              <ProductCard product={product} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
