import React from "react";
import Card from "./Card";
import { GoBook } from "react-icons/go";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineLibraryBooks, MdAccountBalance } from "react-icons/md";
import PersonIcon from "@mui/icons-material/Person";

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
  const cardList = [
    {
      id: 1,
      name: "Attendence",
      bgColor: "#53b972",
      color: "white",
      Icon: MdOutlineLibraryBooks,
    },
    {
      id: 2,
      name: "Assignment",
      bgColor: "#df677c",
      color: "white",
      Icon: HiAcademicCap,
    },
    {
      id: 3,
      name: "Account",
      bgColor: "#4f55ff",
      color: "white",
      Icon: MdAccountBalance,
    },
    {
      id: 4,
      name: "Library",
      bgColor: "#ffbc00",
      color: "white",
      Icon: GoBook,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 mt-4 items-center sm:items-stretch">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white flex flex-col gap-4 items-center justify-center px-3 py-2 rounded-sm shadow-lg flex-none w-32 sm:w-auto">
            <img
              src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-1/318617192_1796926450707574_4055903692392893474_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WE6we9v92RQAX8NZ1iS&tn=uPscKZdmh1J1i6a1&_nc_ht=scontent.fktm17-1.fna&oh=00_AfDChlwVoB7IJ0DG22p9WMJBfyuhH5R8-n63vd6fGN02AQ&oe=63F19FA3"
              alt="student-image"
              className="h-16 w-16 p-1 border-2   shadow-blue-400 shadow-lg border-blue-500 sm:h-20 sm:w-20 lg:h-40 lg:w-40 rounded-[50%]"
            />
            <div>
              <h2 className="font-bold text-gray-600 text-[9px] font-openSans sm:text-xs lg:text-2xl">
                Dipesh Kumar Sah
              </h2>
              <p className="text-center  font-roboto text-[9px] text-blue-500 font-bold lg:text-lg">
                Active
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 bg-white p-5 shadow-lg">
            {cardList.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                bgColor={card.bgColor}
                color={card.color || "black"}
                Icon={card.Icon}
              />
            ))}
          </div>
        </div>
        <div className="my-1 py-2 px-2 lg:px-5 shadow-xl bg-white rounded-sm text-xs sm:text-sm lg:text-lg">
          <h2 className="text-2xl px-5 text-blue-500 flex items-center  font-roboto font-semibold py-3 border-b border-gray-300">
            <PersonIcon className="mr-2" fontSize="large" /> Personal
            Information
          </h2>
          <div className="px-5 py-1 grid grid-cols-2 font-openSans h-[35vh] overflow-y-scroll">
            {Object.keys(user).map((element, index) => (
              <div key={index} className="py-4 border-b border-gray-200">
                <span className="text-base lg:text-lg font-bold inline-block w-32">
                  {element}
                </span>
                <span className="ml-20">{user[element]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
