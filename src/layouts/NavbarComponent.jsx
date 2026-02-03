import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
// import { Link } from "react-router-dom";
import MiniLogo from "../assets/MiniLogo.jpg";
import { NavLink } from "react-router";
export default function NavbarComponent() {
  const navigation = [
    { path: "/", menu: "Home" },
    { path: "/about", menu: "About" },
    { path: "/contact", menu: "Contact" },

  ];
  
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        <img
          src={MiniLogo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navigation.map((nav) => (
          <NavLink  to={nav.path}>{nav.menu}</NavLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
