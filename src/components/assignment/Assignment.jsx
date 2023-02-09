import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import logo from "../../assets/logo-ismt.png";
const AssignmentNoticeRow = () => {
  return (
    <>
      <div className=" flex justify-between items-center border-b-2 p-6">
        {/* Assignment Realesed By */}
        <img src={logo} alt="" className="rounded-full  w-[80px]" />
        <div className=" flex-col justify-start items-center">
          <h1>Web Development</h1>
          <h1 className="text-xs text-gray-500 my-2">
            Instructor: Bikul Koirala
          </h1>
          <h1 className="text-xs text-blue-500 my-2">assignment@ismt.edu.np</h1>
        </div>
        <div>
          <h1 className="text-gray-400">Due Date: 4 April 2023</h1>
          <h1 className="text-blue-400 my-2 text-xs">
            <LinkIcon />
            <a href="">Download Link</a>
          </h1>
        </div>
      </div>
    </>
  );
};

const RowsAssignment = () => {
  return (
    <>
      <div className=" flex justify-between items-center border-y-2 p-6   ">
        {/* Assignment name and details */}
        <div className="flex-1">
          <h1 className="my-2">Advanced Programming</h1>
          <h1 className="text-gray-400">
            Advance programming assignment to solver real world programming
            problems
          </h1>
          <h1 className="text-blue-400 my-2">
            <LinkIcon />
            <a href="">Download Link</a>
          </h1>
        </div>
        {/* Due date and task status */}
        <div className="flex flex-1 justify-between">
          <div></div>
          <div>
            <h1>Feb 9 2023</h1>
            <h1 className="text-green-500 my-3">Submitted</h1>
            <h1 className="text-blue-400 ">
              {" "}
              <a href="">Upload</a>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Assignment = () => {
  return (
    <div class="grid grid-cols-2 gap-2 bg-gray-100 h-screen overflow-hidden">
      <div
        className="bg-white m-2 row-span-2
       rounded overflow-auto hover:overflow-scroll "
      >
        <h1 className="text-center m-2 text-orange-400">
          {" "}
          Assignments Summary
        </h1>
        <RowsAssignment />
        <RowsAssignment />
        <RowsAssignment />
      </div>
      <div className="bg-white m-2 rounded overflow-y-scroll h-[60vh]">
        <h1 className="text-center my-2 text-green-500">
          Assignment Notice Board
        </h1>
        <AssignmentNoticeRow />
        <AssignmentNoticeRow />
        <AssignmentNoticeRow />
      </div>
      <div className="bg-white h-[40vh] rounded">04</div>
    </div>
  );
};

export default Assignment;
