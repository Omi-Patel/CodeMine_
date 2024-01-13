import React, { useEffect } from "react";
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
  Image,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { Card } from "flowbite-react";
import me from "../Home/images/om2.jpg";
import { IoLogIn } from "react-icons/io5";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const menuItems = ["HOME", "ABOUT", "BLOGS"];

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

      {/* mobile */}
      <NavbarContent className="sm:hidden px-1" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit text-2xl" id="logo">
            CodeMine_
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl" id="logo">
            CodeMine_
          </p>
        </NavbarBrand>
        <div className="flex justify-evenly w-96 mx-36 p-2">
          <NavbarItem className="hover:text-[#8FD6E8] font-bold delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/"
            >
              HOME
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/about"
            >
              ABOUT
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/blog"
            >
              BLOGS
            </NavLink>
          </NavbarItem>

          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="bordered" className="font-bold">
            <span className="text-2xl">
              <IoLogIn />
            </span>
            <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
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
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/"
          >
            HOME
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/about"
          >
            ABOUT
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/blog"
          >
            BLOGS
          </NavLink>
        </NavbarMenuItem>

        <NavbarMenuItem className=" p-4 bg-[#414141] hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </NavbarMenuItem>

        {/* user card */}
        <Card className="max-w-sm bg-[#212121] border-2 border-purple-700 mt-8">
          <div className="flex flex-col items-center pb-10">
            <Image
              alt="Bonnie image"
              height="96"
              src={me}
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-300 dark:text-white">
              OM PATEL
            </h5>
            <span className="text-sm text-gray-400 dark:text-gray-400">
              Full Stack Developer.
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <NavLink to="https://bento.me/om-patel" target="_blank">
                <Button
                  className="mx-4 font-bold"
                  color="primary"
                  variant="bordered"
                >
                  Follow Me
                </Button>
              </NavLink>
              <NavLink to={"/contact"}>
                <Button
                  className="mx-4 font-bold"
                  color="primary"
                  variant="bordered"
                >
                  Message
                </Button>
              </NavLink>
            </div>
          </div>
        </Card>
      </NavbarMenu>
    </Navbar>
  );
}
