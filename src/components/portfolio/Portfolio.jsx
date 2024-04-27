import React, { useEffect, useState } from "react";
import me from "../Home/images/om.jpeg";
import data from "./data";
import dhruv from "./Images/Dhruv.jpeg";

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
import { ButtonGroup } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import { motion } from "framer-motion";

import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

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
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdCodeDownload } from "react-icons/io";

const Portfolio = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7];

  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState([]);

  // const projects = data.projects;
  // const animationProject = data.animationProject;
  // console.log(animationProject);
  // console.log(projects[0]);

  // console.log(allProject);

  const setAllProject = () => {
    let allProject = [];
    allProject.push(...data.animationProject, ...data.projects);
    setProject(allProject);
  };

  const setFrontendProject = () => {
    setProject(data.animationProject);
  };

  const setFullstackProject = () => {
    setProject([]);
    setProject(data.projects);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setAllProject();
  }, []);

  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },

    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div className="h-full bg-gradient-to-l from-[#0B0C10] to-[#1F2833]">
      <div className="">
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="m-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-full">
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
              <div className="flex justify-center items-center  border-t pt-4 mx-4 mt-4">
                <div>
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
                      Latest Project
                    </NavLink>
                  </Button>
                </div>
                <div>
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
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gradient-to-l from-[#0B0C10] to-[#1F2833] rounded-2xl">
              <Card className="py-4 bg-gradient-to-l from-grey-400 text-white">
                <CardBody className="overflow-visible py-2">
                  <div>
                    <Image
                      isZoomed
                      alt="Card background"
                      className="object-cover rounded-xl z-5"
                      src={me}
                      width={370}
                    />
                  </div>
                </CardBody>
                <motion.div
                  initial={animations.twoAndThree}
                  whileInView={animations.whileInView}
                  transition={{ delay: 0.5 }}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-xl uppercase">
                      Om <span className="text-[#8739f9]">Patel</span>
                    </h4>
                    <p className="text-sm text-gray-400 font-bold">
                      IT Student.
                    </p>
                    <small className="text-default-500 font-bold">
                      20 Male
                    </small>
                  </CardHeader>
                </motion.div>
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
            date="2021 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
            icon={<CgWebsite />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Dev Internships !
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, IN</h4>
            <p>
              I have completed an Internships @ <b>Let's GrowMore</b> and{" "}
              <b> BharatIntern </b>
              as a role of Frontend Intern. Where I've applied the Technologies
              such as HTML, CSS and JavaScript and Frontend Library called
              ReactJs. Where I learnt how to write and maintain an efficient
              code.
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
        </VerticalTimeline>
      </div>

      {/* Project */}
      <div className=" mt-4 w-full ">
        <div>
          <h1 className="text-center m-8 text-4xl ">Some Works !</h1>
        </div>

        {/* Button  */}
        <div>
          <ButtonGroup className="mx-auto w-full  p-6">
            <Button
              variant="flat"
              color="primary"
              className="font-medium tracking-widest text-medium"
              onClick={setAllProject}
            >
              All
            </Button>
            <Button
              variant="flat"
              color="success"
              className="font-medium tracking-widest text-medium"
              onClick={setFrontendProject}
            >
              Frontend
            </Button>
            <Button
              variant="flat"
              color="warning"
              className="font-medium tracking-widest text-medium"
              onClick={setFullstackProject}
            >
              FullStack
            </Button>
          </ButtonGroup>
        </div>

        {/* work card 4 in rows */}

        <div className="px-4 w-[90%] mx-auto">
          {project.map((e, index) => {
            return (
              <motion.div
                animate={animations.whileInView}
                initial={animations.one}
                transition={{ delay: 0.5 }}
                className=" m-4 auto-rows-fr inline-block"
                key={index}
              >
                <Card
                  isFooterBlurred
                  className="w-full h-[300px] col-span-12 sm:col-span-7 border-1 border-blue-600"
                >
                  <CardHeader className="absolute z-10 flex-col items-start bg-black">
                    <h4 className="text-white/90 font-medium text-xl uppercase  ">
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
                    <motion.div
                      whileInView={animations.whileInView}
                      initial={animations.twoAndThree}
                      transition={{ delay: 0.5 }}
                      className="flex flex-grow gap-2 items-center"
                    >
                      <Button
                        onClick={() => setOpenModal(true)}
                        className="font-bold text-md"
                        color="danger"
                        variant="flat"
                      >
                        Code
                        {/* <span className="text-2xl gap-0">
                          <IoMdCodeDownload />
                        </span> */}
                      </Button>
                    </motion.div>
                    <Button
                      className="font-bold text-md"
                      color="success"
                      variant="bordered"
                    >
                      <NavLink to={e.url} target="_blank">
                        Live Link
                      </NavLink>
                      <span className="text-blue-800 ">
                        <FaExternalLinkAlt />
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* work section use of carousel */}
      </div>

      {/* testimonial */}
      <div className="">
        <section className="text-gray-600 body-font mx-8">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-100 mb-12 text-center">
              Testimonials !
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
                    You are not just a skilled professional; you are a
                    collaborative team player who actively seeks feedback and
                    incorporates it into your work. Your attention to detail,
                    creativity, and commitment to delivering top-notch results
                    make you a valuable asset to any project. Outstanding!!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://i.pravatar.cc/150?u=a04258114e29026708c"
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
                      src={dhruv}
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

      {/* Modal on Code Button */}
      <div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header className="bg-[#212121]" />
          <Modal.Body className="bg-[#212121]">
            <div className="text-center ">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-orange-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-400 dark:text-gray-400">
                Please! Contact to Admin for Accessing The Source Code !
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  className="font-medium"
                  color="success"
                  variant="shadow"
                  onClick={() => setOpenModal(false)}
                >
                  <NavLink to={"/contact"}>Contact Admin !</NavLink>
                </Button>
                <Button
                  className="font-medium"
                  color="danger"
                  variant="shadow"
                  onClick={() => setOpenModal(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
