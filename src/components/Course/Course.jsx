import React from "react";
import Module from "./Module";
import ModuleAccord from "./ModuleAccord";
const Course = () => {
  return (
    <div className="h-screen overflow-y-scroll w-[82vw]">
      {/* <h1 className="mt-2 text-xl font-semibold font-openSans text-blue-500 md:text-2xl xl:text-3xl">
        Modules
      </h1> */}
      <div className="grid grid-cols-4 gap-4">
        <Module
          moduleName="Programming"
          image="https://spectrum.ieee.org/media-library/graphic-image-opener-for-the-top-programming-languges-introduction-article.jpg?id=25581112&width=980"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Database"
          image="https://media.istockphoto.com/id/1400292331/photo/relational-database-tables-with-server-room-and-datacenter-background-concept-of-database.jpg?b=1&s=170667a&w=0&k=20&c=Tg_VtEYKljVL5twTz6YlDf_Sw_-wj976vLT1VhvG53s="
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Networking"
          image="https://wallpapercave.com/wp/wp2044697.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Professional Practice"
          image="https://media.istockphoto.com/id/1393379238/photo/work-performance-is-influenced-by-skills-abilities-and-competence-the-concept-of-the.jpg?s=612x612&w=0&k=20&c=JmF3ow_Nn1jLVsjVWSmrCgBpJhJ3FnxX2rVIxWlO68Q="
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Project and Research"
          image="https://wallpaperaccess.com/full/2053945.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Security"
          image="https://etimg.etb2bimg.com/photo/96417315.cms"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="Web Development"
          image="https://miro.medium.com/max/1200/0*M4bxiCIjcTK-2Xr6.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
        <Module
          moduleName="SDLC"
          image="https://i0.wp.com/melsatar.blog/wp-content/uploads/2012/03/sdlc.png?fit=830%2C374&ssl=1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ipsum nemo blanditiis nam, reprehenderit ullam fugiat. Optio, vero laboriosam."
        />
      </div>
    </div>
  );
};

export default Course;
