/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { removeFranchises } from "../services/api";

function FranchiseCard({ franchise, reQuery, isLoading, setLoading }) {
  async function handleRemoveClick(e) {
    e.preventDefault();
    setLoading(true)
    try {
      await removeFranchises(franchise.streetAddress);
      console.log(`${franchise.name} removed!`);
      reQuery();
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card sx={{ width: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={franchise.image}
        title={franchise.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {franchise.name}
        </Typography>
        <Typography variant="h8" component="div">
          {franchise.streetAddress}
        </Typography>
      </CardContent>
      <Typography variant="h8" component="div">
        {franchise.cityState}
      </Typography>
      <Typography variant="h8" component="div">
        {franchise.zipCode}
      </Typography>
      <CardActions>
        <Button size="small" onClick={handleRemoveClick}>
          Remove location
        </Button>
      </CardActions>
    </Card>
  );
}

export default FranchiseCard;
