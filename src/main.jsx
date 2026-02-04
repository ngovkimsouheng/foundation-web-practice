import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import About from "./pages/about/AboutPages.jsx";
import ContactPage from "../src/pages/contact/ContactPage.jsx";

import ProductDetails from "./components/Product/ProductDetails.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import NotFoundPage from "./layouts/NotFoundPage.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Profile from "./auth/Profile.jsx";
// import NotFoundPage from"./layouts/NotFoundPage.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/category/:categoryName" element={<App />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
