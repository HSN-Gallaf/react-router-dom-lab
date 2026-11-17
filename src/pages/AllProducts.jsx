import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products`,
    );
    console.log(response.data);

    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.title}</p>
          <Link to={`/products/${product._id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
