import React from "react";
import { FaSimCard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsKanbanFill } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";
import { BiSolidColorFill } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaChartPie } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import MyKanbanBoard from "./MyKanbanBoard";
import Calendar from './Calendar';
import Table from "./Table";
import LineChart from "./charts/LineChart";
import AreaChart from "./charts/AreaChart";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";

const Yev = () => {
  const appItems = [
    { icon: <SlCalender />, label: "Calender", component: <Calendar /> },
    { icon: <BsKanbanFill />, label: "Kanban Board", component: <MyKanbanBoard /> },
    { icon: <BsTable/>, label: "Table", component: <Table/> },
    { icon: <BiSolidColorFill />, label: "Change Theme" },
  ];

  const chartsItems = [
    { icon: <FaChartLine />, label: "LineChart", component: <LineChart/> },
    { icon: <FaChartArea />, label: "AreaChart", component: <AreaChart/> },
    { icon: <VscGraph />, label: "BarChart", component: <BarChart/> },
    { icon: <FaChartPie />, label: "PieChart", component: <PieChart/> },
  ];

  const { setMyState } = useStateContext();

  const handleAppClick = (component) => {
    setMyState((prevState) => ({
      ...prevState,
      selectedComponent: component,
    }));
  };

  const handleChartClick = (component) => {
    setMyState((prevState) => ({
      ...prevState,
      selectedComponent: component,
    }));
  };

  return (
    <div className="relative h-screen bg-slate-200 pt-5 pl-6 pr-5">
      <h3 className="font-bold text-lg">Apps </h3>
      <p className="text-xs">Plenty of apps to go with </p>
      <div className="boxes relative h-[20vh] w-full flex items-center">
        <div className=" w-8/12 h-[15vh] absolute z-10 rounded-3xl left-0 top-0 p-4 bg-blue-400 mt-3 border-2 border-blue-300 shadow-xl">
          <div className="text-white">
            <p className="font-thin text-xs">Balance</p>
            <h3 className="font-bold">$3100.00</h3>
            <h3 className="font-semibold ">.... ....5643</h3>
            <h3 className="font-semibold text-sm">Yevhen</h3>
          </div>
        </div>
        <div className=" w-6/12 absolute rounded-2xl translate-z-10 -skew-y-12 origin-right  right-0 top-0 h-[15vh] p-4 bg-slate-300 mt-2 border-4 border-slate-300">
          <FaSimCard className="text-slate-500 ml-10 text-2xl" />
          <p className=" text-xs text-slate-800 font-bold mt-6 ml-10">exp. 6/24</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-1 mt-8">
        {appItems.map((item, index) => (
          <div
            key={index}
            className="col-span-2 bg-white hover:bg-blue-300 rounded-2xl h-20 p-3 cursor-pointer"
            onClick={() => handleAppClick(item.component)}
          >
            <h3 className="text-base gap-3 font-semibold">{item.icon} {item.label}</h3>
            <p className="text-xs">about app...</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-10">
        {chartsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-full h-20 p-6 text-center hover:bg-blue-300"
          onClick={()=> handleChartClick(item.component)}>
            <h3 className="text-base gap-3 font-semibold">{item.icon} {item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yev;
