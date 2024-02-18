import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../Loader/Loader";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { toast } from "react-toastify";
import Comment from "../comment/Comment";

const BlogInfo = () => {
  // let { id } = useParams();
  // console.log(id);

  const context = useContext(myContext);
  const { setloading, loading } = context;

  const params = useParams();
  // console.log(params);

  //* getBlogs State
  const [getBlogs, setGetBlogs] = useState();
  const [viewCount, setViewCount] = useState(0);
  const [selected, setSelected] = useState(false);

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

  // Comment Portion

  const [fullName, setFullName] = useState("");
  const [commentText, setCommentText] = useState("");

  // add comment
  const addComment = async () => {
    const commentRef = collection(
      fireDB,
      "blogPost/" + `${params.id}/` + "comment"
    );
    try {
      if (fullName === "" || commentText === "") {
        return toast.info("Please Write Something!");
      }

      await addDoc(commentRef, {
        fullName,
        commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      toast.success("Comment Added Successfully");
      setFullName("");
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  const [allComment, setAllComment] = useState([]);

  // get comment
  const getcomment = async () => {
    try {
      const q = query(
        collection(fireDB, "blogPost/" + `${params.id}/` + "comment/"),
        orderBy("time")
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setAllComment(productsArray);
        console.log(productsArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcomment();
  }, []);

  return (
    <div className="bg-gradient-to-l from-[#0B0C10] to-[#1F2833] flex forcmnt">
      <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4">
        {/* go back */}
        <div className="flex gap-2 items-center mt-4">
          <NavLink to={"/blog"}>
            <FaArrowAltCircleLeft size={25} />
          </NavLink>

          {/* Text  */}
          <h1 className="text-3xl">Back !</h1>
        </div>

        <div className=" py-4 lg:py-8 wrap">
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
              <div className="content tracking-wide ">
                <div
                  className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                       

                        [&>h2]:text-[26px] [&>h2]:font-bold [&>h2]:mb-5 [&>h2]:underline
                        

                        [&>h3]:text-[20.8px] [&>h3]:font-bold [&>h3]:mb-2.5
                        

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        

                        [&>p]:text-[20px]  [&>p]:mb-5 [&>p]:leading-9
                        

                        [&>ul]:list-disc [&>ul]:mb-2
                        

                        [&>ol]:list-decimal [&>li]:mb-10
                        

                        [&>li]:list-decimal [&>ol]:mb-2

                        [&>pre]:bg-white [&>pre]:text-black [&>pre]:font-bold [&>pre]:mb-2 [&>pre]:p-2 [&>pre]:text-wrap
                        
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
      </section>

      <div className=" m-4 p-2 rounded-lg bg-black cmnt">
        <Comment
          addComment={addComment}
          commentText={commentText}
          setcommentText={setCommentText}
          allComment={allComment}
          fullName={fullName}
          setFullName={setFullName}
        />
      </div>
    </div>
  );
};

export default BlogInfo;
