import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Index = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-12 col-md-8 col-lg-10 bg-[#FAFAFA]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index;
