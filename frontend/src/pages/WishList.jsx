import { useListContext } from "../contexts/ListContext";
import ProductCard from "../components/ProductCard";
import { Typography, Container, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

function WishList() {
  const { wishlist } = useListContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWishlist, setFilteredWishlist] = useState(wishlist || []);

  const filterWishlist = (list, query) => {
    if(!list)
        return []
    if(!query.trim())
        return list
    return list.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
  }

  useEffect(() => {
    setFilteredWishlist(filterWishlist(wishlist, searchQuery))
  }, [wishlist, searchQuery])

  function handleSearch(e) {
    e.preventDefault();
    setFilteredWishlist(filterWishlist(wishlist, searchQuery))
  }

  function handleLoginClick(e) {
    e.preventDefault();
  }

  if (wishlist) {
    return (
      <Container className="wishlist">
        <Stack>
          <Navbar
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            handleLoginClick={handleLoginClick}
          ></Navbar>
          <Typography variant="h4" sx={{ marginBottom: 1 }}>
            Your wishlist
          </Typography>
          <Grid container className="product-grid" spacing={2}>
            {filteredWishlist.map((product) => (
              <Grid key={product.id.timestamp}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    );
  }

  return (
    <div className="wishlist-empty">
      <h2>Your wishlist is empty</h2>
      <p>Add items to list to appear here</p>
    </div>
  );
}

export default WishList;
