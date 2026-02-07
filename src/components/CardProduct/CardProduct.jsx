import { NavLink } from "react-router";

export default function CardProduct({
  id,
  title,
  category,
  description,
  price,
  image,
  onDelete,
}) {
  return (
    <div className="flex flex-col  flex-wrap ">
      <NavLink
        to={`/${id}`}
        key={id}
        className="border rounded-[22px] hover:bg-gray-50 transition-all border-gray-100 bg-white p-2 shadow w-50"
      >
        <img src={image} alt={title} className=" rounded-[14px] mx-auto" />
        {/* <p className="text-blue-500 font-medium">${price}</p> */}
      </NavLink>
      <button
        onClick={() => onDelete && onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded-[12px] hover:bg-red-600 ml-2 mt-2"
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
