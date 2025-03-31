import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
