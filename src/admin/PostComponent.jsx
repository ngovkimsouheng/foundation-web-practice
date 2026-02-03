import React from "react";

async function postProduct(product) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
}

export default function PostComponent({ onAddProduct }) {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [posting, setPosting] = React.useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setPosting(true);

    try {
      const newProduct = await postProduct(formData);
      onAddProduct(newProduct); // 🔥 send to parent
      alert("Product posted successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setPosting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow mb-10"
    >
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
        required
      />

      <button
        type="submit"
        disabled={posting}
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {posting ? "Posting..." : "Create Product"}
      </button>
    </form>
  );
}
