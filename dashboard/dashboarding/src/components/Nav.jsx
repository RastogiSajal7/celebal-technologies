import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import man from "../assets/man.jpg";

const Nav = () => {
  const [nav, showNav] = useState(true);
  const navItems = [
    { icon: <RiHome5Fill className="text-xl" />, label: "Home" },
    { icon: <FaCartArrowDown className="text-xl" />, label: "Orders" },
    { icon: <GrUserWorker className="text-xl" />, label: "Employees" },
    { icon: <MdPeopleAlt className="text-xl" />, label: "Customers" },
    { icon: <IoMdSettings className="text-xl" />, label: "Settings" },
  ];

  return (
    <div className="h-screen p-2 bg-slate-900  flex flex-col ">
      <div className="flex items-center mb-16">
        <MdSpaceDashboard
          className="text-white text-2xl"
          onClick={() => showNav(!nav)}
        />
        <h2 className="font-bold text-xl text-white ml-2">React</h2>
      </div>
      {nav && (
        <div>
        <div className="flex flex-col items-start gap-8 ">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-lg w-full p-2 hover:bg-white hover:text-slate-900 text-slate-400"
            >
              <span className="flex-shrink-0 w-6">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
        <img src={man} className="rounded-2xl w-full md:mt-40 " alt="Profile" />
        </div> 
      )}
    </div>
  );
};

export default Nav;
