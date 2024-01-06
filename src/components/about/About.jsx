import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Blockquote, Carousel } from "flowbite-react";
import me from "../Home/images/om2.jpg";
import { FaUserTie } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";

// import illustration from '../Home/images/img2.webp'
import illustration from "../Home/images/img.png";

import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="h-full bg-gradient-to-l from-[#0B0C10] to-[#1F2833]">
      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div> */}

      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                isZoomed
                className="object-cover object-center rounded"
                alt="hero"
                src={illustration}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="mx-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
                _<span className="text-[#8739f9]">Code</span>Mine
              </h1>
              <Blockquote className="text-gray-300 m-4 tracking-wide">
                <svg
                  className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                Greetings, fellow explorers! Welcome to
                <span className="text-[#8739f9]"> _CodeMine</span>, where every
                click opens the door to a world of inspiration, knowledge, and
                delightful surprises. Get ready to embark on a captivating
                journey of discovery, where each post is a stepping stone into
                the extraordinary
              </Blockquote>
              <div className="flex justify-center">
                <Button
                  className="m-4 font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  <span className="text-xl">
                    <FaBloggerB />
                  </span>
                  <NavLink to={"/blog"}>Read Blogs</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    {/* <Image src={me} className="rounded-xl " /> */}
                    <FaUserTie className="text-black font-bold text-5xl" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">
                      Hey There Champs!! <br /> I'm
                      <span className="text-[#8739f9]"> Om</span> Patel.
                    </h2>
                    <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                    <p className="text-base text-gray-500 tracking-wide">
                      I design and code beautifully simple things, and I love
                      what I do! <br />I Build things for the Web.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="text-2xl text-white">
                    Get to know <span className="text-[#8739f9]">Me</span>!
                  </h1>
                  <p className="leading-relaxed text-lg mb-4 mt-4 text-gray-400 tracking-wide">
                    I'm a Frontend Web Developer building the Front-end of
                    Websites and Web Applications that leads to the success of
                    the overall product. Check out some of my work in the
                    Projects section.
                  </p>
                  <p className="leading-relaxed text-lg mb-4 mt-4 text-gray-400 tracking-wide">
                    I also like sharing content related to the stuff that I have
                    learned over the years in Web Development so it can help
                    other people of the Dev Community. Feel free to Connect or
                    Follow me on my{" "}
                    <span>
                      <a
                        className="text-[#8739f9]"
                        href="https://www.linkedin.com/in/ompatel7113/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linkedin
                      </a>
                    </span>
                    .
                  </p>
                  <Button
                    className=" font-bold text-md"
                    color="primary"
                    variant="bordered"
                  >
                    <span className="text-xl">
                      <BsGithub />
                    </span>
                    <NavLink
                      to={"https://github.com/Omi-Patel"}
                      target="_blank"
                    >
                      About Me!
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
