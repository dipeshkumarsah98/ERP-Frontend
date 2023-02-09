import React from "react";
import Logo from "../../assets/logo-ismt.png";

const Event = () => {
  return (
    <div className="">
      <h1 className="text-xs font-bold font-mono my-2 text-blue-500">
        Upcoming event
      </h1>
      <div className="flex gap-1 overflow-x-scroll">
        <img src={Logo} alt="image" className="w-10 h-10" />
        <div className="w-full">
          <h2>RObotic workshop RObotic workshop RObotic workshop</h2>
          <p>16 feb</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
