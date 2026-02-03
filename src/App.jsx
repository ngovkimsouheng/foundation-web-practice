import Products from "./components/Product/Products";
import React from "react";
import FilterByCategoies from "./components/Product/FilterByCategoies";
import { useNavigate } from "react-router";
import Form from "./pages/form/Form";
import NativeForm from "./pages/form/NativeForm";
export default function App() {
  // const [productDetails, setProductDetails] = React.useState([]);

  // // Fetch products once on mount
  // React.useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const res = await fetch("https://fakestoreapi.com/products");
  //       const data = await res.json();
  //       setProductDetails(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  // function handleAddProduct(newProduct) {
  //   setProductDetails((prev) => [newProduct, ...prev]);
  // }

  return (
    <div className="bg-gray-100">
      <FilterByCategoies />
      <p className="text-center my-4">use react hook form</p>
      <NativeForm></NativeForm>
      <p className="text-center my-4">use form</p>
      <Form></Form>

      <section className="mx-10 ">
        <Products></Products>``
      </section>
    </div>
  );
}
