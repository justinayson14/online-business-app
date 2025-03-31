/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({product}) {

    function onToCartClick() {
        alert("clicked")
    }

    return (
        <Card sx={{ width: 200 }}>
        <CardMedia
          sx={{ height: 140}}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to list</Button>
        </CardActions>
      </Card>
    );
}

export default ProductCard