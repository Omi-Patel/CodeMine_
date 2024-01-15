import { Avatar, Button } from "@nextui-org/react";
import me from "../Home/images/me3.jpg";

import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import client from "../../contentfullClient/contentfull";
import myContext from "../../context/myContext";
import Loader from "../Loader/Loader";
import { MdDashboardCustomize } from "react-icons/md";
// import client from "../../contentfullClient/contentfull";

const arr = [1, 2, 3];

const Blog = () => {
  const context = useContext(myContext);
  const { getAllBlog, loading, setloading } = context;

  const navigate = useNavigate();

  // console.log(getAllBlog);
  // console.log(loading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full bg-gradient-to-r from-[#0B0C10] to-[#1F2833]">
      {/* <div id="aboutBack">
        <div id="text">Read Blogs On CodeMine_</div>
      </div> */}

      <div className=" p-4 flex justify-end">
        <Button color="success" variant="shadow" className="font-bold text-xl">
          <span>
            <MdDashboardCustomize />
          </span>

          <NavLink to={"/dashboard"}>Dashboard !</NavLink>
        </Button>
      </div>

      {/* All Blogs Here */}

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto max-w-7xl ">
            {/* Top Heading  */}
            <div className="mb-5">
              <h1 className=" text-center text-white text-3xl font-bold">
                All Blogs
              </h1>
            </div>
            {/* Main Content  */}
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="flex flex-wrap justify-center -m-4 mb-5">
                  {/* Card 1  */}
                  {getAllBlog.length > 0 ? (
                    <>
                      {getAllBlog.map((item, index) => {
                        const { thumbnail, date, id } = item;
                        return (
                          <div className="p-4 md:w-1/3" key={index}>
                            <div className="h-full border-2 border-blue-300 border-opacity-60 rounded-lg overflow-hidden ">
                              <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center p-2"
                                src={thumbnail}
                                alt="blog"
                              />
                              <div className="p-4">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1 uppercase">
                                  {item.blogs.category}
                                </h2>
                                <h1 className="title-font text-2xl font-medium text-gray-200 mb-3">
                                  {item.blogs.title}
                                </h1>
                                <p className="leading-relaxed mb-3">
                                  Photo booth fam kinfolk cold-pressed sriracha
                                  leggings jianbing microdosing tousled
                                  waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                  <Button
                                    className="font-bold text-md "
                                    color="primary"
                                    variant="bordered"
                                  >
                                    <NavLink to={`/bloginfo/${id}`}>
                                      Read More
                                    </NavLink>
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Button>
                                  <span className="text-gray-400 border-r-2 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-2 py-1  border-gray-200">
                                    {date}
                                  </span>
                                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <Avatar src={me} size="sm" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <h1>Not Found !</h1>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
