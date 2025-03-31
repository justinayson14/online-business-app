/* eslint-disable no-unused-vars */
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import UserToolbar from "./components/UserToolBar";
import AdminToolbar from "./components/AdminToolBar";
import LoginToolbar from "./components/LoginToolBar";
import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import WishList from "./pages/WishList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LoginProvider } from "./contexts/LoginContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <LoginProvider>
        <CssBaseline />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<WishList />} />
          </Routes>
        </main>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
