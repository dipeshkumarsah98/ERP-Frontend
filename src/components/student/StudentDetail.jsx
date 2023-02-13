import React from "react";
import Card from "./Card";
import UserProfile from "./UserProfile";

const StudentDetail = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-2 mb-2 sm:grid-cols-4">
        <Card customColor={"blue"} name="Attendence" />
        <Card name={"Assignment"} />
        <Card customColor="red" name="Account" />
        <Card customColor={"blue"} name="Library" />
      </div>
      <UserProfile />
    </div>
  );
};

export default StudentDetail;
