import React from "react";
import Logo from "../../assets/logo-ismt.png";

const EachEvent = () => {
  return (
    <div className="flex gap-3 items-center bg-white my-2 px-2 py-2 rounded-sm">
      <img src={Logo} alt="image" className="w-16 h-16" />
      <div className="">
        <h2 className="text-md md:text-xl">Your event titile goes here</h2>
        <p className="text-gray-600 md:text-lg">16 feb</p>
      </div>
    </div>
  );
};

export default EachEvent;
