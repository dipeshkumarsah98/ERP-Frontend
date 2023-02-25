import React from "react";
import Box from "@mui/material/Box";
import LinkIcon from "@mui/icons-material/Link";
import TextField from "@mui/material/TextField";
import BookIcon from "@mui/icons-material/Book";
import DenseTable from "./Table";

const BookSection = () => {
  return (
    <div className="flex justify-around items-center mx-3 my-2 ">
      <img
        src="https://novapublishers.com/wp-content/uploads/2021/09/9781685073138-e1636134763122.jpg"
        className=""
        height="200"
        width="100"
        alt=""
      />
      <div className="mx-3">
        <h1>Airtifical Intelligence</h1>
        <h1 className="text-xs text-gray-400">By Subhashish Jung Shah</h1>
        <h1 className="my-2 text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vel
          illum perspiciatis sapiente commodi natus sunt tenetur harum error
          non.
        </h1>
        <div className="flex justify-start items-center">
          <h1 className="text-blue-400 my-2 text-xs">
            <LinkIcon />
            <a href="">Download Link</a>
          </h1>
          <h1 className="text-blue-400 my-2 mx-2 text-xs">
            <BookIcon />
            <a href="">Book Now</a>
          </h1>
        </div>
      </div>
      <div className="text-green-500">
        <h1>Available</h1>
      </div>
    </div>
  );
};

const Library = () => {
  return (
    <div className=" h-screen overflow-y-hidden">
      <h1 className="my-2 rounded text-center bg-blue-400 h-[5vh] flex justify-center items-center">
        <p className="text-xs text-gray-600">
          Library Book Renew: Airtifical Intelligence- March 23 2023
        </p>
      </h1>
      <div class="grid grid-cols-2 gap-2  bg-gray-100">
        <div className="bg-white m-2 col-span-2 rounded  ">
          <h1 className="text-center m-2 font-openSans font-bold text-lg text-blue-500">
            {" "}
            Welcome to ISMT Library
          </h1>
          <Box
            className="mx-3 my-4"
            sx={{
              width: "79vw",
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Search for Books" id="fullWidth" />
          </Box>
          <div className="overflow-y-scroll h-[40vh]">
            <BookSection />
            <BookSection />
            <BookSection />
          </div>
        </div>
        <div className="bg-white mt-2 col-span-2 rounded ">
          <h1 className="text-center my-2 font-bold font-openSans text-lg  text-blue-500">
            Previous Library Records
          </h1>
          <div className="overflow-y-scroll h-[25vh]  ">
            <DenseTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
