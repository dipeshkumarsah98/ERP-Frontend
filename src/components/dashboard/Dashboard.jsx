import React from "react";
import StudentDetail from "../student/StudentDetail";
import Event from "../event/Event";

const Dashboard = () => {
  return (
    <>
      <h1 className="my-2 text-xl font-semibold font-openSans text-blue-500 border border-zinc-500 py-2 px-3 bg-slate-100 shadow-sm md:text-2xl xl:text-3xl">
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
