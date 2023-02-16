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
      <div className="space-y-4 font-roboto lg:h-screen overflow-y-scroll scroll-smooth py-2">
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
