import React, { useEffect } from "react";

import logo from "./images/logo1.png";
import me from "./images/om.jpeg";
import { Avatar, Button, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

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

      <div className="h-full">
        <section className="text-gray-400 body-font bg-gradient-to-r from-[#0B0C10] to-[#1F2833]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="m-4 mx-auto">
                <h1 className="text-center p-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 tracking-wide">
                  "Explore, Engage, Evolve: Your Source for Dynamic Content"
                </h1>
                <p className="text-center p-4 leading-relaxed font-semibold ">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
              <div className="flex justify-center items-center m-4 mx-auto">
                <Button
                  className="mx-4 font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  <NavLink to={"/blog"}>Blogs</NavLink>
                </Button>
                <Button
                  className="font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  <NavLink to={"https://github.com/Omi-Patel"} target="_blank">
                    GitHub
                  </NavLink>
                </Button>

                <Button
                  className="mx-4 font-bold text-md"
                  color="primary"
                  variant="bordered"
                >
                  Resume
                </Button>
              </div>

              <div className="flex flex-col justify-center items-center  m-4 mx-auto">
                <div>
                  <Avatar
                    // isBordered
                    radius="lg"
                    src={me}
                    className="w-20 h-20 text-large"
                  />
                </div>
                <div className="my-2 font-semibold">
                  <span className="text-[#8739F9]">OM</span> PATEL
                </div>
                <div>Developer From India 💟.</div>
              </div>
            </div>

            {/* right */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                isZoomed
                alt="CodeMine Image with Zoom"
                src={logo}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
