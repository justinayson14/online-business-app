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
  const [userRole, setUserRole] = useState("guest"); // admin, user, or guest)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginType, setLoginType] = useState(""); // user or admin

  const handleLoginClick = (type) => {
    console.log("Login button clicked:", type); // Debugging
    setLoginType(type);
    setShowLoginModal(true);
  };

  // Authenticate user (dummy check for now)
  const handleLoginSubmit = (username, password) => {
    console.log("Logging in:", username, password); // Debugging

    if (
      loginType === "user" &&
      username === "user" &&
      password === "password"
    ) {
      setUserRole("user");
    } else if (
      loginType === "admin" &&
      username === "admin" &&
      password === "adminpass"
    ) {
      setUserRole("admin");
    } else {
      alert("Invalid credentials!");
    }
    setShowLoginModal(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LoginProvider>
        <CssBaseline />
        <main className="main-content">
          {/* {userRole === "guest" && (
            <LoginToolbar
              onLoginUser={() => handleLoginClick("user")}
              onLoginAdmin={() => handleLoginClick("admin")}
            />
          )}
          {userRole === "admin" && (
            <AdminToolbar onLogout={() => setUserRole("guest")} />
          )}
          {userRole === "user" && (
            <UserToolbar onLogout={() => setUserRole("guest")} />
          )} */}
          {/* Show login modal if needed */}
          {/* {showLoginModal && (
            <LoginModal
              type={loginType}
              onClose={() => setShowLoginModal(false)}
              onSubmit={handleLoginSubmit}
            />
          )} */}
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
