/* eslint-disable no-unused-vars */
import { AppBar, Box, Button, Toolbar, Typography, Container } from "@mui/material";
import SearchBar from "./SearchBar";
import { useLoginContext } from "../contexts/LoginContext";
import { Link } from "react-router-dom";

const NavBar = ({ setSearchQuery, handleSearch, handleLoginClick }) => {
  const { status, logout } = useLoginContext();

  const handleLogout = (e) => {
    console.log(status);
    logout();
  };

  return (
    <Box className="navbar-container">
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 4}}>
            <Link to="/">
              <Typography variant="h4" sx={{color: "white"}}>LaterList</Typography>
            </Link>
            <SearchBar
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            ></SearchBar>
            <Typography variant="h7" sx={{width: 250}}>
              {status === "admin" && "Hello, Admin"}
              {status === "guest" && "Hello, Guest"}
            </Typography>
            {status === "guest" && (
              <Link to="/list">
                <Button variant="outlined" sx={{color: "white"}}>Wishlist</Button>
              </Link>
            )}
            {status === "admin" && (
              <Container className="admin-nav" sx={{display: "flex", gap: 2}}>
                <Link to="/">
                  <Button variant="outlined" sx={{color: "white"}}>Products</Button>
                </Link>
                <Link to="/employees">
                  <Button variant="outlined" sx={{color: "white"}}>Employees</Button>
                </Link>
                <Link to="/franchises">
                  <Button variant="outlined" sx={{color: "white"}}>Franchises</Button>
                </Link>
              </Container>
            )}
          </Box>
          {status === "invalid" || status === null ? (
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
