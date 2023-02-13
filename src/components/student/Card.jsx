import React from "react";
import { GoBook } from "react-icons/go";

const Card = ({
  bgColor,
  name,
  color,
  headingColor,
  descColor,
  iconColor,
  Icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "white",
        color: color || "black",
      }}
      className="py-3 px-2 shadow-sm text-sm rounded-sm lg:text-lgl flex flex-col justify-center items-center  cursor-pointer hover:outline hover:outline-blue-500 hover:opacity-80"
    >
      <Icon size={70} />
      <p
        style={{
          color: headingColor || "inherit",
        }}
        className="text-xl font-openSans font-semibold"
      >
        {name}
      </p>
      <p
        style={{
          color: descColor || "inherit",
        }}
        className="text-red-400 font-roboto font-semibold"
      >
        2 Pending
      </p>
    </div>
  );
};

export default Card;
