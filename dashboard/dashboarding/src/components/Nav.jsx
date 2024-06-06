import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import man from "../assets/man.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import Portfolio from "./Portfolio";
import ClientProjects from "./ClientProjects";


const Nav = () => {
  const [nav, showNav] = useState(true);
  const handleDashboardClick=()=>{
    showNav(!nav);
  };

  const {setMyState} = useStateContext();

  const handleNavItemClick = (component) => {
    setMyState((prevState)=> ({
      ...prevState,
      selectedComponent: component,
    }));
  };

  const navItems = [
    { icon: <RiHome5Fill className="text-xl" />, label: "Home", component: <Portfolio/>},
    { icon: <FaLaptopCode className="text-xl" />, label: "Projects" },
    { icon: <PiCertificateFill className="text-xl" />, label: "Progress" },
    { icon: <MdPeopleAlt className="text-xl" />, label: "Clients", component: <ClientProjects/> },
    { icon: <IoMdSettings className="text-xl" />, label: "Settings" },
  ];

  return (
    <div className="h-screen p-2 bg-slate-900  flex flex-col ">
      <div className="flex items-center mb-16">
        <MdSpaceDashboard
          className="text-white text-2xl"
          onClick={handleDashboardClick}
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
              onClick={()=> handleNavItemClick(item.component)}
              >
              <span className="flex-shrink-0 w-6">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
        {/* <img src={man} className="rounded-2xl w-full md:mt-40 " alt="Profile" /> */}
        </div> 
      )}
    </div>
  );
};

export default Nav;
