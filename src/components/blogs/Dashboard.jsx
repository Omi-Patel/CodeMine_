import { Button } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const context = useContext(myContext);
  const { getAllBlog, deleteBlogs } = context;

  // console.log(getAllBlog);

  //* Logout Function
  const logout = () => {
    localStorage.clear();
    toast.dark("Logged OUT !");
    navigate("/blog");
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen">
      {/* <h1>Dashboard</h1> */}
      {/* <Button>
        <NavLink to={"/createblog"}>Create Blog</NavLink>
      </Button> */}

      <div className="flex flex-wrap justify-center items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 my-8">
        <div className="left">
          <img
            className=" w-40 h-40  object-cover rounded-full border-2 border-blue-600 p-1"
            src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
            alt="profile"
          />
        </div>
        <div className="right text-center">
          <h1 className=" font-bold text-2xl mb-2">
            <span className="text-[#8739f9]">Admin</span> : Om Patel.
          </h1>

          <h2 className="font-semibold">Software Developer</h2>
          <h2 className="font-semibold">admin@gmail.com</h2>
          <h2 className="font-semibold">
            <span>Total Blogs : {getAllBlog.length} </span>
          </h2>
          <div className=" flex gap-2 mt-2">
            <Button
              color="success"
              variant="shadow"
              className="font-bold text-md"
            >
              <NavLink to={"/createblog"}>Create Blog !</NavLink>
            </Button>

            <Button
              onClick={logout}
              color="danger"
              variant="shadow"
              className="font-bold text-md"
            >
              Logout !
            </Button>
          </div>
        </div>
      </div>

      {/* Line  */}
      <hr className="border-2" />

      {/* Table  */}
      <div className="">
        <div className=" container mx-auto px-4 max-w-7xl my-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-xl bg">
            {/* table  */}
            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-900 dark:text-gray-400">
              {/* thead  */}
              <thead className="text-lg bg-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thumbnail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              {/* tbody  */}
              {getAllBlog.length > 0 ? (
                <>
                  {getAllBlog.map((item, index) => {
                    const { thumbnail, date, id } = item;
                    return (
                      <tbody key={index}>
                        <tr className=" border-b-2 text-white bg-[#212121]">
                          {/* S.No   */}
                          <td className="px-6 py-4">{index + 1}.</td>

                          {/* Blog Thumbnail  */}
                          <th scope="row" className="px-6 py-4 font-medium ">
                            {/* thumbnail  */}
                            <img
                              className="w-16 rounded-lg"
                              src={thumbnail}
                              alt="thumbnail"
                            />
                          </th>

                          {/* Blog Title  */}
                          <td className="px-6 py-4">{item.blogs.title}</td>

                          {/* Blog Category  */}
                          <td className="px-6 py-4 uppercase">
                            {item.blogs.category}
                          </td>

                          {/* Blog Date  */}
                          <td className="px-6 py-4">{date}</td>

                          {/* Delete Blog  */}
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteBlogs(id)}
                              className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </>
              ) : (
                <h1 className="text-white">Not Found</h1>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
