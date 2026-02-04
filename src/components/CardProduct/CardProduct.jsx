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
    <div className="flex flex-col flex-wrap justify-center">
      <NavLink
        to={`/${id}`}
        key={id}
        className="border rounded-[32px] hover:bg-gray-50 transition-all border-gray-100 bg-white p-4 shadow w-50"
      >
        <img src={image} alt={title} className="h-40 rounded-[20px] mx-auto" />
        <p className="text-blue-500 font-medium">${price}</p>
      </NavLink>
      <button
        onClick={() => onDelete && onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2 mt-2"
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
