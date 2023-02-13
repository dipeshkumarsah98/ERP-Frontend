import React from "react";
import Logo from "../../assets/event.png";

const EachEvent = () => {
  return (
    <div className="flex gap-3 items-center bg-white my-2 px-2 py-2 rounded-sm">
      <img
        src={Logo}
        alt="image"
        className="w-20 lg:w-32 h-20 lg:h-32 rounded-lg"
      />
      <div className="">
        <h2 className="text-md md:text-xl">Your event titile goes here</h2>
        <p className="text-gray-600 md:text-lg">16 feb</p>
      </div>
    </div>
  );
};

export default EachEvent;
