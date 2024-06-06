import React from "react";
import butterfly from "../assets/butterfly.png";
import AboutMe from "./AboutMe.jsx";
import Table from "./Table.jsx";
import Projects from "./Projects.jsx";

const Portfolio = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-6 bg-white pt-4 pb-4 pl-2 h-30vw">
        <div className="col-span-6 md:col-span-3 ">
          <h1 className="font-bold text-5xl ml-14 bg-gradient-to-l from-cyan-400 to-slate-900 bg-clip-text text-transparent">Admin </h1>
          <h1 className="font-bold text-5xl ml-28 bg-gradient-to-l from-slate-900 to-cyan-400 bg-clip-text text-transparent">Dashboard</h1>
          
          <div className="flex">
            <img src={butterfly} className="rotate-45 h-40 p-2" />
            <p className="text-slate-300 text-4xl text-center mt-10 font-semibold ">A brief description about profile </p>
          </div>
          {/* tasks and their status table */}
          <Table/>
        </div>

        {/* About me !  */}
        <div className="col-span-6 md:col-span-3">
        <AboutMe/>
        <Projects/>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
