import React, { useEffect } from "react";

import logo from "./images/logo1.png";
import me from "./images/om.jpeg";
import { Avatar, Button, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa6";
import { FaPager } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* copy */}

      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-2 bg-[url('https://wallpapercave.com/wp/wp2406485.jpg')] bg-cover bg-no-repeat bg-center w-[80%] mx-auto">
        Photo
      </div> */}

      <div className="h-full bg-gradient-to-r from-[#0B0C10] to-[#1F2833]">
        <section className="text-gray-300 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center ">
              <div className="my-4 mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: "-100%" }}
                  whileInView={{ opacity: 1, y: "0" }}
                  className="text-center px-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 tracking-wide "
                >
                  "Explore, Engage, Evolve: Your Source for Dynamic Content"
                </motion.h1>
                <p className="text-center p-6 leading-relaxed font-medium tracking-wide ">
                  Greetings, Dear readers, and welcome to{" "}
                  <span className="text-[#8739f9]">CodeMine</span> ! We are
                  thrilled to have you here, ready to embark on a journey of
                  discovery, inspiration, and growth. This digital space is more
                  than a blog; it's a haven for minds seeking enrichment and
                  hearts yearning for connection.
                </p>
              </div>
              <div className="flex justify-center items-center m-2 mx-auto flex-wrap">
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* <Button
                    className="mx-3 font-bold text-md"
                    color="primary"
                    variant="bordered"
                  >
                    <span className="text-md">
                      <FaBloggerB />
                    </span>
                    <NavLink to={"/blog"}>Blogs</NavLink>
                  </Button> */}

                  <Button
                    className="mx-3 font-bold text-md px-0"
                    color="primary"
                    variant="bordered"
                  >
                    <NavLink to={"/blog"}>
                      <div className="flex justify-center items-center gap-2 p-4">
                        <span className="text-md">
                          <FaBloggerB />
                        </span>
                        Blogs
                      </div>
                    </NavLink>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="font-bold text-md px-0"
                    color="primary"
                    variant="bordered"
                  >
                    <NavLink
                      to={"https://github.com/Omi-Patel"}
                      target="_blank"
                    >
                      <div className="flex justify-center items-center gap-2 p-4">
                        <span className="text-md">
                          <BsGithub />
                        </span>
                        GitHub
                      </div>
                    </NavLink>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    className="m-3 font-bold text-md px-0"
                    color="primary"
                    variant="bordered"
                  >
                    <a
                      href="https://drive.google.com/file/d/1gvz3Fk8WKpl13GaA_-ulIvZrwXAZ_VO3/view?usp=sharing"
                      target="_blank"
                    >
                      <div className="flex justify-center items-center gap-2 p-4">
                        <span className="text-md">
                          <FaPager />
                        </span>
                        Resume
                      </div>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* right */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded z-5"
                isZoomed
                alt="CodeMine Image with Zoom"
                src={logo}
              />
            </div>
          </div>
        </section>

        <div>
          <section className="text-gray-300 body-font mx-4 ">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-[#212121]">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-blue-200 text-lg title-font font-medium mb-3">
                        Explore Limitless Horizons:
                      </h2>
                      <p className="leading-relaxed text-base">
                        At Our Platform, we believe in the power of exploration
                        and the beauty of diverse perspectives. Click around and
                        let your curiosity be your guide. Don't miss out on the
                        latest updates and exclusive content!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-[#212121]">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-blue-200 text-lg title-font font-medium mb-3">
                        Let's Connect:
                      </h2>
                      <p className="leading-relaxed text-base">
                        Follow us on Social Media Platforms to stay connected
                        with our vibrant community. Share your thoughts,
                        insights, and favorite posts. We love hearing from you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
