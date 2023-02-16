import React from "react";
import StudentDetail from "../student/StudentDetail";
import Event from "../event/Event";

const Dashboard = () => {
  return (
    <>
      <div className="row h-screen mx-2 overflow-hidden">
        <div className="col-12 space-y-4 col-lg-9">
          <h1 className="my-2 text-xs font-semibold font-openSans uppercase text-blue-500 border border-zinc-500 py-2 px-3 bg-slate-100 shadow-sm md:text-2xl xl:text-2xl">
            Dashboard
          </h1>
          <StudentDetail />
        </div>
        {/* events */}
        <div className="col-lg-3 my-2">
          <Event />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
