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
import { FaCode } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";
import { motion } from "framer-motion";

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
          <p className="font-bold text-inherit text-2xl" id="logo">
            CodeMine_
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <span className="text-3xl mr-2">
            <FaCode />
          </span>
          <motion.p
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-bold text-inherit text-3xl"
            id="logo"
          >
            <NavLink to={"/"}>CodeMine_</NavLink>
          </motion.p>
        </NavbarBrand>
        <div className="flex justify-evenly w-96 mx-36 p-2">
          <NavbarItem className="hover:text-[#8FD6E8] font-bold delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/"
            >
              <motion.h1
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                HOME
              </motion.h1>
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/about"
            >
              <motion.h1
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                ABOUT
              </motion.h1>
            </NavLink>
          </NavbarItem>
          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/blog"
            >
              <motion.h1
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                BLOGS
              </motion.h1>
            </NavLink>
          </NavbarItem>

          <NavbarItem className="hover:text-[#8FD6E8] font-bold ease-in-out delay-100">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
              color="foreground"
              to="/contact"
            >
              <motion.h1
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                CONTACT
              </motion.h1>
            </NavLink>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="bordered" className="font-bold">
            <span className="text-xl">
              <IoLogIn />
            </span>
            <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* mobile menu */}
      <NavbarMenu className="bg-[#1B1B1B] text-white">
        <NavbarMenuItem className="mt-6 p-4 gap-2 hover:text-[#8FD6E8] font-bold ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl flex items-center gap-3">
              <FaHome />
              <h1> HOME</h1>
            </span>
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl flex items-center gap-3">
              <FaCircleInfo />
              <h1>ABOUT</h1>
            </span>
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem className=" p-4 hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl flex items-center gap-3">
              <ImBlog />
              <h1>BLOGS</h1>
            </span>
          </NavLink>
        </NavbarMenuItem>

        <NavbarMenuItem className=" p-4  hover:text-[#8FD6E8] font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#8739f9]" : "")}
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl flex items-center gap-3">
              <BiSolidMessageRoundedEdit />
              <h1>CONTACT</h1>
            </span>
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
              <Button
                className="mx-4 font-bold"
                color="primary"
                variant="bordered"
              >
                <NavLink to={"/contact"} onClick={() => setIsMenuOpen(false)}>
                  Message
                </NavLink>
              </Button>
            </div>
          </div>
        </Card>
      </NavbarMenu>
    </Navbar>
  );
}
