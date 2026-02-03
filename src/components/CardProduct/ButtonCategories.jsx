// import React from "react";
// import { useNavigate } from "react-router";

// export default function ButtonCategories({ category }) {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/", { state: { category } });
//   };
//   return (
//     <button
//       onClick={handleClick}
//       className="bg-blue-500 my-6   text-white w-auto px-4 py-2 rounded hover:bg-blue-600 "
//     >
//       {category}
//     </button>
//   );
// }
import React from "react";
import { useNavigate, useParams } from "react-router";

export default function ButtonCategories({ category }) {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const handleClick = () => {
    navigate(`/category/${category}`);
  };

  const isActive = categoryName === category;

  return (
    <button
      onClick={handleClick}
      className={`
        my-6  text-white w-auto px-4 py-2 rounded-[18px] transition
        ${isActive ? "bg-blue-800  " : "bg-blue-500  hover:bg-blue-600"}
      `}
    >
      {category}
    </button>
  );
}
