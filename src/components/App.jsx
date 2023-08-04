import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/productdetails" exact element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
