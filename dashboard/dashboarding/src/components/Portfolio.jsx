import React from "react";
import butterfly from "../assets/butterfly.png";
import AboutMe from "./AboutMe.jsx";
import Table from "./Table.jsx";

const Portfolio = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-6 bg-white pt-4 pb-4 pl-2 h-30vw">
        <div className="col-span-6 md:col-span-3 ">
          <h1 className="font-bold text-5xl ml-14">Admin </h1>
          <h1 className="font-bold text-5xl ml-28">Dashboard</h1>
          
          <div className="flex">
            <img src={butterfly} className="rotate-45 h-40 p-2" />
          </div>
          {/* tasks and their status table */}
          <Table/>
        </div>

        {/* About me !  */}
        <div className="col-span-6 md:col-span-3">
        <AboutMe/>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
