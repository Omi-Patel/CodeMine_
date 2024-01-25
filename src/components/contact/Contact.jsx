import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// console.log(emailjs.sendForm);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(name, email, message);

    try {
      emailjs
        .sendForm("codemine.com", "codemine_07", e.target, "EVrTzfRVTIyzWQgRs")
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Sent Successfully !");
          },
          (error) => {
            console.log(error.text);
            toast.error("Try Again !");
          }
        );

      setName("");
      setEmail("");
      setMessage("");

      //ee
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(status);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full">
      <div></div>
      <div className=" text-gray-400 body-font bg-gradient-to-l from-[#0B0C10] to-[#1F2833]">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className=" text-4xl font-bold  title-font mb-8 text-gray-100">
                Let's <span className="text-[#8739f9]">Tech</span> Talk.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300 text-xl">
                Thank you for choosing{" "}
                <span className="text-[#8739f9]">CodeMine_</span> as your
                digital sanctuary. We're excited to be part of your journey.
                Click, explore, and let the adventure begin!
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={submitForm}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 lg:w-1/2 sm:w-full">
                    <div className="relative ">
                      <label
                        htmlFor="name"
                        className="leading-7 text-md text-white"
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border   focus:ring-2  text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 lg:w-1/2 sm:w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-md text-white"
                      >
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border   focus:ring-2   text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-md text-white"
                      >
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        required
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border   focus:ring-2  h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <Button
                      className="font-bold text-xl px-4 py-4"
                      color="primary"
                      variant="bordered"
                      type="submit"
                    >
                      <span className="text-xl">
                        <RiSendPlaneFill />
                      </span>
                      Send
                    </Button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-purple-500">codemine@gmail.com</a>
                    <p className="leading-normal my-5 text-blue-100">
                      07 OM PATEL.
                      <br />
                      Gujarat, IN 123456
                    </p>
                    <h1 className="text-gray-500">
                      Thank you For reaching out to us ❤️.
                    </h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
