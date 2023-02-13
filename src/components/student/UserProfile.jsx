import React from "react";

const UserProfile = () => {
  const user = {
    Name: "Dipesh Kumar Sah",
    Address: "Jadibuti-2, Kathmandu",
    "Date of birth": "2002/10/02",
    Email: "kca22.26dks@ismt.edu.np",
    "Father Name": "Rajesh Kumar sah",
    "Mother Name": "Pramile Devi Sah",
    Age: 21,
    Course: "B.TECH",
    Section: "P1(A)",
    Semester: "III",
    Batch: 2022,
  };

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
        <div className=" py-2 px-2 lg:px-5 bg-white rounded-sm text-xs sm:text-sm lg:text-lg">
          <h2 className="text-2xl px-5 font-roboto font-semibold py-3 border-b border-gray-300">
            Information
          </h2>
          <div className="my-2 px-5 grid grid-cols-2 font-openSans h-80 overflow-y-scroll">
            {Object.keys(user).map((element, index) => (
              <div key={index} className="my-2">
                <span className="text-base lg:text-xl font-bold">
                  {element}
                </span>
                <br />
                <span className="">{user[element]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
