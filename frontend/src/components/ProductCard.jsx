/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useListContext } from "../contexts/ListContext";
import { useLoginContext } from "../contexts/LoginContext";

function ProductCard({ product }) {
  const { inWishlist, addToWishlist, removeFromWishlist } = useListContext();
  const { status } = useLoginContext();
  const wishlist = inWishlist(product.name);

  function handleAddRemoveClick(e) {
    e.preventDefault();
    if (wishlist) removeFromWishlist(product.name);
    else addToWishlist(product);
  }

  return (
    
    <Card sx={{ width: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h8">${product.price}</Typography>
      </CardContent>
      {status === "guest" && (
        <CardActions>
          {wishlist ? (
            <Button size="small" onClick={handleAddRemoveClick}>
              Remove from list
            </Button>
          ) : (
            <Button size="small" onClick={handleAddRemoveClick}>
              Add to list
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default ProductCard;
