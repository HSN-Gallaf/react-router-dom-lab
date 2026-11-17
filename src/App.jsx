import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import ProductsDetails from "./pages/ProductsDetails";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/new-product" element={<CreateProduct />}></Route>
        <Route path="/products/:id" element={<ProductsDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
