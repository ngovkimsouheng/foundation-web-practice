import deleteDataUtil from "../utils/DeleteData";
import React from "react";

export default function DeleteData({ product, setProducts }) {
  const handleDelete = async (id) => {
    try {
      const result = await deleteDataUtil(id);
      console.log("Deleted:", result);

      if (setProducts) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  if (!product) return null;

  return (
    <div>
      <button
        onClick={() => handleDelete(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
