import "./App.css";
import { useState} from "react";
import ProductCard from "./components/ProductCard";
import LoginToolbar from "./components/LoginToolBar";
import AdminToolbar from "./components/AdminToolBar";
import UserToolbar from "./components/UserToolBar"

function App() {

  const [userRole, setUserRole] = useState("guest"); // admin, user, or guest)

  return (
    <>
      
    {userRole === "guest" && (
      <LoginToolbar 
      onLoginUser={() => setUserRole("user")}
      onLoginAdmin={() => setUserRole("admin")}
      />
    )}
      {userRole === "admin" && <AdminToolbar onLogout={() => setUserRole("guest")} />}
      {userRole === "user" && <UserToolbar onLogout={() => setUserRole("guest")} />}
      <ProductCard product={{name: "Keyboard", cost:"$20"}}/>
    </>
  );
}

export default App;
