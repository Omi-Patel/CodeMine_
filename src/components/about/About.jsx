import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Blockquote, Carousel } from "flowbite-react";
import me from "../Home/images/om.jpeg";
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
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="m-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="mx-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
                About <span className="text-[#8739f9]">Me</span> .
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
                I'm a Full stack developer with a passion for building top-notch
                websites. I've a solid understanding of both Frontend and
                Backend development and I can't wait to utilize my skills in the
                workplace. I'm a quick learner and am certain that I can be a
                valueable asset to any web development team.
              </Blockquote>
              {/* <Divider className="m-4" /> */}
              <div className="flex justify-center m-4">
                <Button
                  className=" font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  <span className="text-xl">
                    <BsGithub />
                  </span>
                  <NavLink to={"https://github.com/Omi-Patel"} target="_blank">
                    Latest Project
                  </NavLink>
                </Button>
                <Button
                  className="mx-4 font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  <span className="text-2xl">
                    <IoLogIn />
                  </span>
                  <NavLink to={"/portfolio"}>PortFolio</NavLink>
                </Button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              {/* <Image
                isZoomed
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              /> */}

              <Card className="py-4 bg-gradient-to-l from-grey-400 text-white">
                <CardBody className="overflow-visible py-2">
                  <Image
                    isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={me}
                    width={370}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-xl uppercase">
                    Om <span className="text-[#8739f9]">Patel</span>
                  </h4>
                  <p className="text-sm text-gray-400 font-bold">
                    Jr. Developer
                  </p>
                  <small className="text-default-500 font-bold">20 Male</small>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
