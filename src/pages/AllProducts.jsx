import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Spin } from "antd";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products`,
    );

    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products ? (
        products.map((product) => (
          <div key={product._id}>
            <p>{product.title}</p>
            <Link to={`/products/${product._id}`}>See Details</Link>
          </div>
        ))
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default AllProducts;
