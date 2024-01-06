import React from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      Blog Info
      <h1>{id}</h1>
    </div>
  );
};

export default BlogInfo;
