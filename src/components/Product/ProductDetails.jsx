import React from "react";
import LoadingComponent from "../LoadingComponent.jsx";
import { useNavigate, useParams } from "react-router";
import Getdata from "../Getdata.js";
import CardProductDetails from "../CardProduct/CardProductDetails.jsx";
// import { useNavigate } from "react-router";
import FilterByCategoies from "./FilterByCategoies.jsx";
export default function ProductDetails() {
  const [productDetails, setProductDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await Getdata(`products/${id}`);
        console.log(data);
        setProductDetails(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);
  if (loading) {
    return (
      <div className="text-center grid place-content-center h-[90vh] py-10 text-lg font-semibold">
        <LoadingComponent></LoadingComponent>
      </div>
    );
  }

  return (
    <div className="p-4 w-7xl  mx-auto h-[90vh] grid place-content-center">
      
      <CardProductDetails
        thumbnail={productDetails.thumbnail}
        title={productDetails.title}
        description={productDetails.description}
        price={productDetails.price}
        images={productDetails.images}
      ></CardProductDetails>
    </div>
  );
}
