import React from "react";
import { BiSolidMessageAlt } from "react-icons/bi";
import man from "../assets/man.jpg";

const AboutMe = () => {
  return (
    <div className="p-4 bg-slate-100 rounded-2xl sm:w-96 ">
      <div className="bg-slate-900 rounded-2xl p-2 h-60 ">
        <div className="bg-transparent h-56 rounded-2xl border-solid border-8 border-r-slate-900 border-l-slate-900 border-blue-500 text-white p-3">
          <div className=" justify-between grid grid-cols-2 ">
            <img src={man} className="h-28 rounded-full "/>
            <div className="content-around">
              <p className="font-semibold text-4xl mb-4 ">Sajal Rastogi</p>
              <h2 className="font-semibold mb-4">FullStack Developer</h2>
              <h2 className="font-bold">I design and code modern webapps</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
