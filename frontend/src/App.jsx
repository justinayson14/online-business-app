import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <ProductCard product={{name: "Keyboard", cost:"$20"}}/>
    </>
  );
}

export default App;
