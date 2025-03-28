import "./App.css";
import ProductCard from "./components/ProductCard";
import LoginToolbar from "./components/LoginToolBar";
import AdminToolbar from "./components/AdminToolBar";
import UserToolbar from "./components/UserToolBar"

function App() {
  return (
    <>
      <LoginToolbar />
      <AdminToolbar />
      <UserToolbar />
      <ProductCard product={{name: "Keyboard", cost:"$20"}}/>
    </>
  );
}

export default App;
