import "./App.css";
import { useState} from "react";
import ProductCard from "./components/ProductCard";
import LoginToolbar from "./components/LoginToolBar";
import AdminToolbar from "./components/AdminToolBar";
import UserToolbar from "./components/UserToolBar"
import LoginModal from "./components/LoginModal";

function App() {

  const [userRole, setUserRole]             = useState("guest"); // admin, user, or guest)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginType, setLoginType]           = useState(""); // user or admin


  const handleLoginClick = (type) => {
    console.log("Login button clicked:", type); // Debugging
    setLoginType(type);
    setShowLoginModal(true);
  };
  
  // Authenticate user (dummy check for now)
  const handleLoginSubmit = (username, password) => {

    console.log("Logging in:", username, password); // Debugging

    if (loginType === "user" && username === "user" && password === "password") {
      setUserRole("user");
    } else if (loginType === "admin" && username === "admin" && password === "adminpass") {
      setUserRole("admin");
    } else {
      alert("Invalid credentials!");
    }
    setShowLoginModal(false);
  };




  return (
    <>
      
    {userRole === "guest" && (
      <LoginToolbar 
      onLoginUser={() => handleLoginClick("user")}
      onLoginAdmin={() => handleLoginClick("admin")}
      />
    )}
      {userRole === "admin" && <AdminToolbar onLogout={() => setUserRole("guest")} />}
      {userRole === "user" && <UserToolbar onLogout={() => setUserRole("guest")} />}
      <ProductCard product={{name: "Keyboard", cost:"$20"}}/>
    
     {/* Show login modal if needed */}
     {showLoginModal && (
        <LoginModal 
          type={loginType}
          onClose={() => setShowLoginModal(false)}
          onSubmit={handleLoginSubmit}
        />
     )}
    
    
    </>
  );
}

export default App;
