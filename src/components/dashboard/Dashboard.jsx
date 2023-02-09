import React from "react";
import StudentDetail from "../student/StudentDetail";
import Event from "../event/Event";

const Dashboard = () => {
  return (
    <>
      <h1 className="my-2 text-xl font-semibold font-mono text-blue-700 md:text-2xl xl:text-3xl">
        Dashboard
      </h1>
      <div className="row">
        <div className="col-12 col-lg-8">
          <StudentDetail />
        </div>
        {/* events */}
        <div className="col-lg-4 ">
          <Event />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
