import { Button } from "@nextui-org/react";

import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Comment = ({
  addComment = { addComment },
  commentText = { commentText },
  setcommentText = { setcommentText },
  allComment = { allComment },
  fullName = { fullName },
  setFullName = { setFullName },
}) => {
  return (
    <section className=" py-8 lg:py-16 ">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold">Make a Comment</h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-6">
          {/* Full Name Input  */}
          <div
            className="py-1 px-3 mb-4 rounded-lg rounded-t-lg 
                 border border-blue-600"
          >
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-700 bg-transparent"
            />
          </div>

          {/* Text Area  */}
          <div
            className="py-1 px-3 mb-4 rounded-lg rounded-t-lg 
               border border-blue-600 "
          >
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              id="comment"
              rows={6}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white  bg-transparent"
              placeholder="Write a comment..."
              required
              //   defaultValue={""}
            />
          </div>
          {/* Button  */}
          <div className="">
            <Button className="text-md" color="primary" onClick={addComment}>
              <span className="text-xl">
                <RiSendPlaneFill />
              </span>
              Post !
            </Button>
          </div>
        </form>

        {/* Bottom Item  */}
        <article className="mb-6 text-base rounded-lg">
          {allComment.map((item, index) => {
            const { fullName, commentText, date } = item;
            return (
              <div className="p-2" key={index}>
                <footer className="flex justify-between items-center">
                  <div className="flex items-center justify-between my-2 bg-[#212121] capitalize px-2 py-1 rounded-lg w-full">
                    <p className="inline-flex items-center mr-3 text-md  omi">
                      {fullName}
                    </p>
                    <p className="text-sm ml-4 omi">{date}</p>
                  </div>
                </footer>
                <p className="text-gray-200 dark:text-gray-400 text-md capitalize omi">
                  ↳ {commentText}
                </p>
                <hr className="mt-2" />
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Comment;
