import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const arr = [1, 2, 3];
  return (
    <div className="h-full bg-gradient-to-r from-[#0B0C10] to-[#1F2833]">
      {/* blog card */}
      <div className="border-2">
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {arr.map((e, index) => (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-blue-300 border-opacity-60 rounded-lg overflow-hidden ">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center p-3"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                    <div className="p-4">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-200 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Button
                          className="font-bold text-md "
                          color="primary"
                          variant="bordered"
                        >
                          <NavLink to={`/bloginfo/${index}`}>Read More</NavLink>
                          <span>
                            <FaArrowRight />
                          </span>
                        </Button>
                        <span className="text-gray-400 border-r-2 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-2 py-1  border-gray-200">
                          Jan 6, 2024
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <Avatar
                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            size="sm"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
