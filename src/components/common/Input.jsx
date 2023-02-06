import React from "react";

const Input = ({ placeholder, name, type }) => {
  return (
    <div className="space-y-1">
      <input
        className={
          "px-2 py-1 2xl:py-2 bg-white border border-gray-300 rounded-sm  focus:outline-blue-500 w-full"
        }
        required
        placeholder={placeholder || "Enter any text.."}
        type={type || "text"}
        name={name || type}
      />
    </div>
  );
};

export default Input;
