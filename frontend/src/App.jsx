/* eslint-disable no-unused-vars */
import "./styles/App.css";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Franchises from "./pages/Franchises";
import { Routes, Route } from "react-router-dom";
import WishList from "./pages/WishList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LoginProvider } from "./contexts/LoginContext";
import { ListProvider } from "./contexts/ListContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ListProvider>
        <LoginProvider>
          <CssBaseline />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<WishList />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/franchises" element={<Franchises />} />
            </Routes>
          </main>
        </LoginProvider>
      </ListProvider>
    </ThemeProvider>
  );
}

export default App;
