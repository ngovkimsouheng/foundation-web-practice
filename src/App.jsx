import Products from "./components/Product/Products";
import React from "react";
import DeleteData from "./pages/form/DeleteData";
import RotatingText from "./components/RotatingText";
// import FilterByCategoies from "./components/Product/FilterByCategoies";
import { useNavigate } from "react-router";
import Form from "./pages/form/Form";
import NativeForm from "./pages/form/NativeForm";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import NotFoundPage from "./layouts/NotFoundPage";
import Prism from "./components/Prism";
import Example from "./components/SliderToggle";
import { DrawCircleText } from "./components/DrawCircleText";
import { SlideTabsExample } from "./components/SlideTabs";
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
      <SlideTabsExample></SlideTabsExample>
      <DrawCircleText
        text="Welcome to React Bits!"
        radius={150}
        fontSize={24}
      />
      <Example></Example>
      <div style={{ width: "100%", height: "700px", position: "relative" }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <div className="w-fit">
        <RotatingText
          texts={["React", "Bits", "Is", "Cool!"]}
          mainClassName="px-2 text-[60px] font-bold sm:px-2 md:px-3  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <div style={{ height: "600px", position: "relative" }}></div>
      </div>
      <DeleteData></DeleteData>
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
