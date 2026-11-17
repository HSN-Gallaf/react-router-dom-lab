import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products`,
        formData,
      );
      navigate(`/products/${response.data._id}`);
    } catch (err) {
      console.log("Error Message: ", err);
    }
  };

  return (
    <>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleInputChange}
          value={formData.description}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          onChange={handleInputChange}
          value={formData.category}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={handleInputChange}
          value={formData.price}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          onChange={handleInputChange}
          value={formData.quantity}
        />

        <button type="submit">Create Product</button>
      </form>
    </>
  );
};

export default CreateProduct;
