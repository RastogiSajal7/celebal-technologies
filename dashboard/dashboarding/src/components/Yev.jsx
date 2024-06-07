import React, { useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { BsKanbanFill } from "react-icons/bs";
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
import Theme from "./Theme";
import '../../src/globals.css';

const Yev = () => {
  const appItems = [
    { icon: <SlCalender />, label: "Calender", component: <Calendar /> },
    { icon: <BsKanbanFill />, label: "Kanban Board", component: <MyKanbanBoard /> },
    { icon: <BsTable />, label: "Table", component: <Table /> },
    { icon: <BiSolidColorFill />, label: "Change Theme", component: <Theme /> },
  ];

  const chartsItems = [
    { icon: <FaChartLine />, label: "LineChart", component: <LineChart /> },
    { icon: <FaChartArea />, label: "AreaChart", component: <AreaChart /> },
    { icon: <VscGraph />, label: "BarChart", component: <BarChart /> },
    { icon: <FaChartPie />, label: "PieChart", component: <PieChart /> },
  ];

  const { setMyState, currentColor, currentMode } = useStateContext();

  useEffect(() => {
    if (!currentColor && currentMode === 'Dark') {
   
      const defaultThemeColor = "#3f51b5";
      setMyState((prevState) => ({
        ...prevState,
        currentColor: defaultThemeColor,
      }));
    }
  }, [currentColor, currentMode, setMyState]);

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

  // Function to darken the current color for dark mode
  const darkenColor = (color) => {
    if (!color) return color; 
    const colorHex = color.replace('#', '');
    const r = parseInt(colorHex.substring(0, 2), 16);
    const g = parseInt(colorHex.substring(2, 4), 16);
    const b = parseInt(colorHex.substring(4, 6), 16);
    const factor = 0.7;
    const darkenedColor = `rgb(${Math.floor(r * factor)}, ${Math.floor(g * factor)}, ${Math.floor(b * factor)})`;
    return darkenedColor;
  };

  const backgroundColor = currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor;

  return (
    <div
      className={`relative h-screen border-l-2 border-r-2 ${
        currentMode === "Dark"
          ? "bg-gray-900 text-white border-white"
          : "bg-white text-black border-transparent"
      }`}
    >
      <div className="relative h-screen pt-5 pl-6 pr-5">
        <div className="grid grid-cols-4 gap-2 mb-1 mt-8">
          {appItems.map((item, index) => (
            <div
              key={index}
              className={`app-item col-span-2 bg-slate-200 hover:bg-blue-300 rounded-2xl h-20 p-3 cursor-pointer ${
                currentMode === "Dark" ? "text-white" : "text-black"
              }`}
              style={{ backgroundColor: currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor }}
              onClick={() => handleAppClick(item.component)}
            >
              <h3 className="text-base gap-3 font-semibold">
                {item.icon} {item.label}
              </h3>
              <p className="text-xs">about app...</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-10">
          {chartsItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-full bg-slate-200 h-20 p-6 text-center hover:bg-blue-300 ${
                currentMode === "Dark" ? "text-white" : "text-black"
              }`}
              style={{ backgroundColor: currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor }}
              onClick={() => handleChartClick(item.component)}
            >
              <h3 className="text-base gap-3 font-semibold">
                {item.icon} {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Yev;
