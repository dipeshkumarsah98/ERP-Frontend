import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="flex gap-1 mt-2 items-center sm:items-stretch">
        <div className="bg-white  flex gap-1 items-center justify-start px-3 py-2 rounded-sm flex-none w-32 sm:w-auto">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="student-image"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-[50%]"
          />
          <div>
            <h2 className="font-bold text-[9px] sm:text-xs lg:text-xl">
              Dipesh Kumar Sah
            </h2>
            <p className="text-center text-[9px] lg:text-lg">Active</p>
          </div>
        </div>
        <ul className="py-2 px-1 bg-white  rounded-sm text-xs sm:text-sm lg:text-lg flex-1">
          <li className="border-b border-gray-100 p-1">
            Name: Dipesh Kumar Sah
          </li>
          <li className="border-b border-gray-100 p-1">
            Date of birth: 2002/10/02
          </li>
          <li className="border-b border-gray-100 p-1">
            Email: kac22.26dks@ismt.edu.np
          </li>
          <li className="border-b border-gray-100 p-1">Section: A</li>
          <li className="border-b border-gray-100 p-1">Phone: 9808982517</li>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
