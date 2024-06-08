import React from "react";
import butterfly from "../assets/butterfly.png";
import AboutMe from "./AboutMe.jsx";
import Table from "./Table.jsx";
import Projects from "./Projects.jsx";
import { EditorData } from "../data/dummyData.jsx";

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-white pt-4 pb-4 pl-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1 text-center lg:text-left">
            <h1 className="font-bold text-4xl lg:text-5xl lg:ml-14 bg-gradient-to-l from-cyan-400 to-slate-900 bg-clip-text text-transparent">
              Admin
            </h1>
            <h1 className="font-bold text-4xl lg:text-5xl lg:ml-28 bg-gradient-to-l from-slate-900 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start mt-6 lg:mt-0">
              <img src={butterfly} className="rotate-45 h-20 lg:h-40 p-2" alt="Butterfly" />
              <p className="text-slate-300 text-xl lg:text-4xl text-center mt-4 lg:mt-10 font-semibold">
                A brief description about profile
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <AboutMe />
          </div>
        </div>
        <div className="editorData bg-slate-100 rounded-2xl p-4 font-mono font-semibold m-4 lg:m-12">
          <EditorData />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
