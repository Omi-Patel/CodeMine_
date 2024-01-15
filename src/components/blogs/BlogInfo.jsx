import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../Loader/Loader";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BlogInfo = () => {
  // let { id } = useParams();
  // console.log(id);

  const context = useContext(myContext);
  const { setloading, loading } = context;

  const params = useParams();

  //* getBlogs State
  const [getBlogs, setGetBlogs] = useState();
  console.log(getBlogs);

  const getAllBlogs = async () => {
    setloading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "blogPost", params.id));
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
    window.scrollTo(0, 0);
  }, []);

  //* Create markup function
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div>
      <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4 ">
      {/* go back */}
        <div className="flex gap-2 items-center mt-4">
          <NavLink to={"/blog"}>
            <FaArrowAltCircleLeft size={25} />
          </NavLink>

          {/* Text  */}
          <h1 className="text-3xl">Back !</h1>
        </div>

        <div className=" py-4 lg:py-8">
          {loading ? (
            <Loader />
          ) : (
            <div>
              {/* Thumbnail  */}
              <img
                alt="content"
                className="mb-3 rounded-lg h-full w-full"
                src={getBlogs?.thumbnail}
              />
              {/* title And date  */}
              <div className="flex justify-between items-center mb-3">
                <h1 className=" text-xl md:text-2xl lg:text-2xl font-semibold">
                  {getBlogs?.blogs?.title}
                </h1>
                <p>{getBlogs?.date}</p>
              </div>
              <div className={`border-b mb-5 `} />

              {/* blog Content  */}
              <div className="content">
                <div
                  className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                       

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        

                        [&>ul]:list-disc [&>ul]:mb-2
                        

                        [&>ol]:list-decimal [&>li]:mb-10
                        

                        [&>li]:list-decimal [&>ol]:mb-2
                        

                        [&>img]:rounded-lg
                        `}
                  dangerouslySetInnerHTML={createMarkup(
                    getBlogs?.blogs?.content
                  )}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* <Comment
          addComment={addComment}
          commentText={commentText}
          setcommentText={setCommentText}
          allComment={allComment}
          fullName={fullName}
          setFullName={setFullName}
        /> */}
      </section>
    </div>
  );
};

export default BlogInfo;
