import React from "react";
import Card from "./Card";
import UserProfile from "./UserProfile";
import { GoBook } from "react-icons/go";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineLibraryBooks, MdAccountBalance } from "react-icons/md";

const StudentDetail = () => {
  const cardList = [
    {
      id: 1,
      name: "Attendence",
      bgColor: "#53b972",
      color: "white",
      Icon: MdOutlineLibraryBooks,
    },
    { id: 2, name: "Assignment", bgColor: "#df677c", Icon: HiAcademicCap },
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
    <div>
      <div className="grid grid-cols-2 gap-4 mt-2 mb-2 sm:grid-cols-4">
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
      <UserProfile />
    </div>
  );
};

export default StudentDetail;
