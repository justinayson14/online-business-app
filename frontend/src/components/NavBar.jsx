/* eslint-disable no-unused-vars */
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Typography variant="h4">LaterList</Typography>
            <SearchBar
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            ></SearchBar>
            <Typography variant="h6">
              {status === "admin" && "Hello, Admin"}
              {status === "guest" && "Hello, Guest"}
            </Typography>
            {status === "guest" && (
              <Link to="/list">
                <Button sx={{color: "white"}}>Wishlist</Button>
              </Link>
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
