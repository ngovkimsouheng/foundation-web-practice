import Products from "./components/Product/Products";
import React from "react";
import DeleteData from "./pages/form/DeleteData";
// import FilterByCategoies from "./components/Product/FilterByCategoies";
import { useNavigate } from "react-router";
import Form from "./pages/form/Form";
import NativeForm from "./pages/form/NativeForm";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import NotFoundPage from "./layouts/NotFoundPage";
export default function App() {
  const { t } = useTranslation();
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
      <DeleteData
       
      ></DeleteData>
      {/* <LanguageSwitcher /> */}
      {/* <h1 className="text-center my-4">{t('welcome')}</h1> */}
      {/* <FilterByCategoies /> */}
      <p className="text-center my-4">{t("Using native form")}</p>
      <NativeForm></NativeForm>
      <p className="text-center my-4">{t("post")}</p>
      <Form></Form>
      {/* <NotFoundPage></NotFoundPage> */}
      <section className="mx-10 ">
        <Products></Products>
      </section>
    </div>
  );
}
