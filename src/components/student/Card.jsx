import React from "react";
import { GoBook } from "react-icons/go";

const Card = () => {
  return (
    <div className="bg-white py-3 px-2 text-sm rounded-sm lg:text-lgl flex flex-col justify-center items-center">
      <GoBook size={60} />
      <p className="text-xl font-openSans font-semibold">Assignment</p>
      <p className="text-red-400 font-roboto font-semibold">2 Pending</p>
    </div>
  );
};

export default Card;
