import "./styles/App.css";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<ShoppingCart />}/>
      </Routes>
    </main>
  );
}

export default App;
