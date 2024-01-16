import React, { useEffect } from "react";
import me from "../Home/images/om.jpeg";
import photo from "./Images/portfolio.jpg";
import data from "./data";

import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { Blockquote } from "flowbite-react";
// import { Carousel } from "flowbite-react";
// import { Card } from "flowbite-react";

const Portfolio = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7];

  const projects = data.projects;
  // console.log(projects[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full bg-gradient-to-l from-[#0B0C10] to-[#1F2833]">
      {/* <div className="border-2">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <Image src={me} className="rounded-xl " />
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
      </div> */}

      <div className="">
        <section className="text-gray-600 body-font ">
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
              <div className="flex justify-center m-4 border-t pt-8 mt-8">
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
                  <NavLink to={"https://bento.me/om-patel"} target="_blank">
                    Follow Me
                  </NavLink>
                </Button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gradient-to-l from-[#0B0C10] to-[#1F2833] rounded-2xl">
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

      {/* journey */}
      <div className="">
        <h1 className="text-center mb-8 text-4xl">
          My <span className="text-[#8739f9]">Journey</span>!
        </h1>
        <div></div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<BiSolidSchool />}
          >
            <h3 className="vertical-timeline-element-title text-xl">
              Higher Secondary
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-200">
              The Ambika Highschool, GJ
            </h4>
            <p>
              Completed the journey of High School and planning for Higher
              Study, most probably Engineering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">SVIT, Vasad</h4>
            <p>
              After completing high school, got addmission into the Engineering
              Collage and looking forward-
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<CgWebsite />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Web Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SVIT, GJ</h4>
            <p>
              Fall into the world of Web Development, Learnt Different
              Technologies like HTML, CSS, JavaScript, Git and GitHub etc.
              Programming Languages : Java, C.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<FaServer />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gujarat, IN</h4>
            <p>
              Learning Different Programming Technology like NodeJs and
              ExpressJs, Database : MongoDB, Library : ReactJs. After that Dive
              into the game of Problem Solving, DSA and other stuff
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<MdEngineering />}
          >
            <h3 className="vertical-timeline-element-title">
              Upcoming Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gujarat, IN</h4>
            <p>
              After learning the core subject : DBMS, DS, OS, CN etc. Looking
              for opportunity to serve my knowledge. Journey Never stop, always
              excited to explore new things in this Era of Technology.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Project */}
      <div className=" mt-4 w-full ">
        <div>
          <h1 className="text-center m-8 text-4xl ">Projects!</h1>
        </div>

        {/* work card 4 in rows */}

        <div className="  px-4 w-[90%] mx-auto m-4">
          {projects.map((e, index) => {
            {
              /* console.log(e); */
            }
            return (
              <div className=" m-3 auto-rows-fr inline-block" key={index}>
                <Card
                  isFooterBlurred
                  className="w-full h-[300px] col-span-12 sm:col-span-7 border-1 border-blue-600"
                >
                  <CardHeader className="absolute z-10 flex-col items-start bg-black">
                    <h4 className="text-white/90 font-medium text-xl uppercase  font-bold">
                      {/* title */}
                      {e.title}
                    </h4>
                    <p className="text-tiny text-white/60 ">
                      {e.description}
                      {/* description */}
                    </p>
                  </CardHeader>

                  <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 h-full object-contain opacity-50 hover:opacity-100"
                    width={300}
                    src={e.imgSrc}
                  />

                  <CardFooter className="absolute bg-black/90 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                      <Button
                        className="font-bold text-md"
                        color="danger"
                        variant="flat"
                      >
                        <NavLink to={"#"} target="_blank">
                          Code
                        </NavLink>
                      </Button>
                    </div>
                    <Button
                      className="font-bold text-md"
                      color="success"
                      variant="bordered"
                    >
                      <NavLink to={e.url} target="_blank">
                        Live Link
                      </NavLink>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>

        {/* work section use of carousel */}

        {/* <div className="border-2 m-4 w-[80%] mx-auto">
          {
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-2 m-6">
              <Carousel className="border-4 h-full">
                {arr.map((e, index) => {
                  return (
                    <div className=" flex">
                      <div className="w-[50%]  bg-black">
                        <img
                          className="z-0"
                          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                          alt="..."
                        />

                        <h1 className="text-center">Left</h1>
                      </div>
                      <div className=" text-white text-center bg-blue-900 z-10 w-[50%] mx-auto">
                        <h1>Project {index}</h1>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          }
        </div> */}
      </div>

      {/* testimonial */}
      <div className="">
        <section className="text-gray-600 body-font mx-8">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-100 mb-12 text-center">
              Testimonials
            </h1>
            <div className="flex flex-wrap -m-4 ">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-[#313131] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-300">
                    You are not just a skilled professional; he is a
                    collaborative team player who actively seeks feedback and
                    incorporates it into his work. His attention to detail,
                    creativity, and commitment to delivering top-notch results
                    make him a valuable asset to any project. Outstanding!!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/106x106"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-blue-200">
                        David Goggins
                      </span>
                      <span className="text-gray-400 text-sm">
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-[#313131] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-300">
                    I highly recommend you for your outstanding work and look
                    forward to the opportunity to collaborate with you again in
                    the future. Your portfolio speaks volumes about your talent
                    and versatility, and I have no doubt that you will continue
                    to excel in your endeavors.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/107x107"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-blue-200">
                        Dhruv Patel
                      </span>
                      <span className="text-gray-400 text-sm">Softwar Er.</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Accordian */}
    </div>
  );
};

export default Portfolio;
