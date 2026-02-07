// import React from "react";
// import { useEffect } from "react";
// import Getdata from "../Getdata.js";
// import ButtonCategories from "../CardProduct/ButtonCategories.jsx";
// export default function FilterByCategoies() {
//   const [categories, setCategories] = React.useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const data = await Getdata("products/categories"); // dummy json
//         setCategories(data);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchCategories();
//   }, []);

//   return (
//     <div className=" gap-4 z-0  sticky top-10 w-screen flex justify-center">
//       {categories.slice(0, 4).map((category, index) => (
//         <div key={index}>
//           <ButtonCategories category={category.name} />
//         </div>
//       ))}
//     </div>
//   );
// }
