import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["HOME", "ABOUT", "BLOGS"];

  return (
    <Navbar
      className="bg-[#242424] text-white"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit text-3xl" id="logo">
            CodeMine_
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl" id="logo">
            CodeMine_
          </p>
        </NavbarBrand>
        <div className="flex justify-evenly w-96 mx-36 p-2">
          <NavbarItem className="hover:text-[#8FD6E8] font-bold delay-100">
            <NavLink color="foreground" to="/">
              HOME
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink color="foreground" to="/about">
              ABOUT
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink color="foreground" to="/blog">
              BLOGS
            </NavLink>
          </NavbarItem>

          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink color="foreground" to="/contact">
              CONTACT
            </NavLink>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="font-bold"
          >
            PORTFOLIO
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to="#"
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}

      <NavbarMenu className="bg-[#1B1B1B] text-white">
        <NavbarMenuItem className="mt-6 p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink to="/">HOME</NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink to="/about">ABOUT</NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink to="/blog">BLOGS</NavLink>
        </NavbarMenuItem>

        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink to="/contact">CONTACT</NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
