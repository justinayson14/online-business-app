/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { removeEmployee } from "../services/api";

function EmployeeCard({ employee, reQuery, isLoading, setLoading }) {
  async function handleRemoveClick(e) {
    e.preventDefault();
    setLoading(true)
    try {
      await removeEmployee(employee.email);
      console.log(`${employee.name} removed!`);
      reQuery();
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="h8" component="div">
          Age: {employee.age}
        </Typography>
        <Typography
          variant="h8"
          sx={{ overflowWrap: "break-word" }}
          component="div"
        >
          Email: {employee.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemoveClick}>
          Remove employee
        </Button>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
