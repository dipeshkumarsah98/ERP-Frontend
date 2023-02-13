import React from "react";
import EachEvent from "./EachEvent";

const Event = () => {
  return (
    <>
      <h1 className="text-lg font-bold font-openSans  text-blue-500 border-zinc-500 py-2 px-3 bg-slate-100 shadow-sm md:text-2xl xl:text-3xl">
        Upcoming event
      </h1>
      {/* event list */}
      <div className=" h-[50vh] font-roboto lg:h-[88vh] overflow-y-scroll scroll-smooth py-2">
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
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
