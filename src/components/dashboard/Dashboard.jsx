import React from "react";
import { Outlet } from "react-router";
import Accounting from "../Accounting/Accounting";
import Sidebar from "../sidebar/Sidebar";
import StudentDetail from "../student/StudentDetail";

const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {/*  col-2 */}
        <Sidebar />
        <div className="col-6 col-md-8 col-lg-10 bg-[#f4f6f9] overflow-x-scroll">
          {/* <StudentDetail /> */}
          <Accounting />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
