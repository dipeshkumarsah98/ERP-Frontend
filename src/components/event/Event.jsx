import React from "react";
import EachEvent from "./EachEvent";

const Event = () => {
  const events = [
    {
      id: 1,
      title: "Happy New Year !!",
      date: "Feb 1",
      image: "https://picsum.photos/900/900",
    },
    {
      id: 2,
      title: "Chirstmas Event",
      date: "Feb 5",
      image: "https://picsum.photos/900/900",
    },
    {
      id: 3,
      title: "Welcome Party !!",
      date: "Dec 6",
      image: "https://picsum.photos/900/900",
    },
    {
      id: 4,
      title: "Birthday Celebration !!",
      date: "Sep 7",
      image: "https://picsum.photos/900/900",
    },
    {
      id: 5,
      title: "World Women Day !!",
      date: "April 1",
      image: "https://picsum.photos/900/900",
    },
    {
      id: 6,
      title: "Fathers Day !!",
      date: "Dec 1",
      image: "https://picsum.photos/900/900",
    },
  ];

  return (
    <>
      <h1 className="text-lg font-bold font-openSans  text-blue-500 border-zinc-500 py-2 px-3 bg-slate-100 shadow-sm md:text-2xl xl:text-3xl">
        Upcoming event
      </h1>
      {/* event list */}
      <div className=" h-[50vh] font-roboto lg:h-[88vh] overflow-y-scroll scroll-smooth py-2">
        {events.map((event) => (
          <EachEvent
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            img={event.image}
          />
        ))}
      </div>
    </>
  );
};

export default Event;
