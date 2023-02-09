import React from "react";
import Card from "./Card";
import UserProfile from "./UserProfile";

const StudentDetail = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <UserProfile />
    </div>
  );
};

export default StudentDetail;
