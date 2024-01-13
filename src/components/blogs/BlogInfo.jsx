import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      Blog Info
      <h1>{id}</h1>
    </div>
  );
};

export default BlogInfo;
