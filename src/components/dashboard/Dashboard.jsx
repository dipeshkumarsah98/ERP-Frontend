import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Event from "../student/Event";
import StudentDetail from "../student/StudentDetail";

const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {/*  col-2 */}
        <Sidebar />
        <div className="col-12 col-md-8 col-lg-10 bg-[#FAFAFA] overflow-x-scroll">
          <div className="row">
            <div className="col-8 col-lg-9">
              <StudentDetail />
            </div>
            <div className="bg-white col-4 col-lg-3">
              <Event />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
