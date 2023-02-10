import React from "react";
import EachEvent from "./EachEvent";

const Event = () => {
  return (
    <>
      <h1 className="text-lg font-bold font-openSans my-2 text-blue-500 md:text-2xl xl:text-3xl">
        Upcoming event
      </h1>
      {/* event list */}
      <div className="h-[50%] font-roboto lg:h-[50%] overflow-y-scroll scroll-smooth">
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
      </div>
    </>
  );
};

export default Event;
