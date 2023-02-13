import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mt-4 items-center sm:items-stretch">
        <div className="bg-white flex flex-col gap-1 items-center justify-start px-3 py-2 rounded-sm flex-none w-32 sm:w-auto">
          <img
            src="https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
            alt="student-image"
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32 rounded-[50%]"
          />
          <div>
            <h2 className="font-bold text-[9px] font-openSans sm:text-xs lg:text-xl">
              Dipesh Kumar Sah
            </h2>
            <p className="text-center font-roboto text-[9px] lg:text-lg">
              Active
            </p>
          </div>
        </div>
        <ul className="py-2 px-5 grid grid-cols-2 gap-0 bg-white font-roboto font-[550]  rounded-sm text-xs sm:text-sm lg:text-lg flex-1">
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
          <li className="border-b border-gray-100 p-1">Sex: Male</li>
          <li className="border-b border-gray-100 p-1">
            Address: Jadibut, kathmandu
          </li>
          <li className="border-b border-gray-100 p-1">
            Father Name: Rajesh Kumar Sah
          </li>

          <li className="border-b border-gray-100 p-1">
            Mother Name: Pramila Devi Sah
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
