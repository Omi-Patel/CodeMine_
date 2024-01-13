import React, { useEffect, useState } from "react";
import MyContext from "./myContext";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/firebaseConfig";

const MyState = (props) => {
  const [getAllBlog, setGetAllBlog] = useState([]);
  const [loading, setloading] = useState(false);

  function getAllBlogs() {
    setloading(true);

    try {
      const q = query(collection(fireDB, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllBlog(blogArray);
        // console.log(productsArray)
        setloading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  // Blog Delete Function
  const deleteBlogs = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "blogPost", id));
      getAllBlogs();
      toast.success("Blogs deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        getAllBlog,
        deleteBlogs,
        loading,
        setloading,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
