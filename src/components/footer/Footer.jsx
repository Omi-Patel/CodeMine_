// "use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Component() {
  return (
    <Footer container className="bg-[#242424]">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            {/* <Footer.Brand
            
              href="#"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="CodeMine Logo"
              name="CodeMine"
            /> */}
            <Footer.Title
              title="CodeMine_"
              className="text-[#8739F9] font-bold text-4xl tracking-wide"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="about"
                className="tracking-widest text-[#8739F9] font-bold"
              />
              <Footer.LinkGroup col className="text-white">
                <NavLink to="/" className="hover:text-[#8FD6E8] ">
                  Home
                </NavLink>
                <NavLink to="/about" className="hover:text-[#8FD6E8] ">
                  About
                </NavLink>
                <NavLink to="/blog" className="hover:text-[#8FD6E8] ">
                  Blog
                </NavLink>
                <NavLink to="/contact" className="hover:text-[#8FD6E8] ">
                  Contact
                </NavLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Follow us"
                className="tracking-widest text-[#8739F9] font-bold "
              />
              <Footer.LinkGroup col className="text-white ">
                <NavLink
                  to="https://github.com/Omi-Patel"
                  className="hover:text-[#8FD6E8]"
                >
                  Github
                </NavLink>
                <NavLink
                  to="https://bento.me/om-patel"
                  target="_blank"
                  className="hover:text-[#8FD6E8]"
                >
                  Bento
                </NavLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="tracking-widest text-[#8739F9] font-bold"
              />
              <Footer.LinkGroup col className="text-white ">
                <NavLink to="/" className="hover:text-[#8FD6E8]">
                  Privacy Policy
                </NavLink>
                <NavLink to="/" className="hover:text-[#8FD6E8]">
                  Terms &amp; Conditions
                </NavLink>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by=" @CodeMine, Created With ❤️ By Om Patel !"
            year={2024}
            className="text-white text-md"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              className="hover:text-[#1877f2]"
              href="https://bento.me/om-patel"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="hover:text-[#c32aa3]"
              href="https://bento.me/om-patel"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="hover:text-[#1da1f2]"
              href="https://bento.me/om-patel"
              target="_blank"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="hover:text-[#8FD6E8]"
              href="https://github.com/Omi-Patel"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon
              className="hover:text-[#0a66c2]"
              href="https://bento.me/om-patel"
              target="_blank"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
