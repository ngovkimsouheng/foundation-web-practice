import { Outlet } from "react-router";

import NavbarComponent from "./NavbarComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
export default function RootLayout() {
  return (
    <div>
      <nav className=" sticky z-99 top-0 mx-auto ">
        <NavbarComponent />
      </nav>
      <Outlet />
      <FooterComponent />
    </div>
  );
}
