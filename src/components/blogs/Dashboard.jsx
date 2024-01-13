import { Button } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <NavLink to={"/createblog"}>Create Blog</NavLink>
      </Button>
    </div>
  );
};

export default Dashboard;
