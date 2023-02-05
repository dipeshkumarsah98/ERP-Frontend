import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ label, name, type }) => {
  const [isVisibile, setIsVisible] = useState(false);
  const input = useRef(); //getting reference of input box

  const Icon = () => {
    if (isVisibile)
      return (
        <AiOutlineEyeInvisible
          onClick={handleVisible}
          className="absolute -translate-y-7 translate-x-64 cursor-pointer text-xl"
        />
      );
    return (
      <AiOutlineEye
        onClick={handleVisible}
        className="absolute -translate-y-7 translate-x-64  cursor-pointer text-xl"
      />
    );
  };

  const handleVisible = () => {
    if (!isVisibile) {
      input.current.type = "text";
    } else {
      input.current.type = "password";
    }
    setIsVisible(!isVisibile);
  };

  return (
    <div className="space-y-1">
      <label htmlFor={name || type} className="text-lg xl:text-xl 2xl:text-2xl">
        {label}
      </label>
      <br />
      <input
        ref={input}
        className={
          type === "password"
            ? "relative px-2 py-1 2xl:py-2 bg-black/10 rounded-sm focus:bg-gray-300 focus:outline-blue-500"
            : "px-2 py-1 2xl:py-2 bg-black/10 rounded-sm focus:bg-gray-300 focus:outline-blue-500"
        }
        required
        type={type || "text"}
        name={name || type}
      />
      {type === "password" && Icon()}
    </div>
  );
};

export default Input;
