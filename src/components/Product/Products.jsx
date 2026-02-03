import React from "react";
import Getdata from "../Getdata.js";
import LoadingComponent from "../LoadingComponent.jsx";
import CardProduct from "../CardProduct/CardProduct.jsx";
import { useParams } from "react-router";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { categoryName } = useParams();
  const category = categoryName || null;

  React.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let data;
        if (category) {
          data = await Getdata(
            `products/category/${encodeURIComponent(category)}`,
          );
          setProducts(data.products || data); // dummyjson returns {products:[]} or []
        } else {
          data = await Getdata("products");
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center grid place-content-center h-[90vh] py-10 text-lg font-semibold">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center ">
      {products.length === 0 ? (
        <div className="text-gray-500 text-lg">
          No products found for this category.
        </div>
      ) : (
        products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.thumbnail}
            category={product.category}
            title={product.title}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))
      )}
    </div>
  );
}
