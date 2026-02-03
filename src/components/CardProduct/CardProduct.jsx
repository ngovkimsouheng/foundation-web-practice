import { NavLink } from "react-router";
export default function CardProduct({
  id,
  title,
  category,
  description,
  price,
  image,
}) {
  return (
    <div className="flex  flex-wrap justify-center">
      {/* {productDetails.map((product) => (
        <div key={product.id} className="border p-4  shadow m-4 w-64">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold line-clamp-1 mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <NavLink to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
          view details
          </NavLink>
        </div>
      ))} */}
      <NavLink
        to={`/${id}`}
        key={id}
        className="border rounded-[32px] hover:bg-gray-50 transition-all border-gray-100 bg-white p-4 shadow   w-50"
      >
        <img src={image} alt={title} className="h-40  mx-auto " />
        {/* <h2 className="text-lg font-semibold line-clamp-1 ">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p> */}
        {/* <p className="text-sm text-blue-500 w-fit bg-blue-100 px-2 py-1 rounded-[10px] ">
          {category}
        </p> */}
        <p className="text-blue-500 font-medium">${price}</p>
        {/* <NavLink
          
          className="bg-blue-500  cursor-pointer text-white px-4 py-2  hover:bg-blue-600"
        >
          view details
        </NavLink> */}
      </NavLink>
    </div>
  );
}
