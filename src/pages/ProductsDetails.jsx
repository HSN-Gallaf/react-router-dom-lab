import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";

const ProductsDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`,
      );

      setProduct(response.data);
    } catch (err) {
      console.log("Error Message: ", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>

      {product ? (
        <>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Course: {product.quantity}</p>
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ProductsDetails;
