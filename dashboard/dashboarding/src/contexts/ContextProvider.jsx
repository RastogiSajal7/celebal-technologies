import React, {useState, useContext, createContext, } from "react";
const MyContext = createContext();
const initialState = {
    Calendar: false,
    KanbanBoard: false,
    Editor: false,
    theme: false,
    LineChart: false,
    selectedComponent: null,

}

export const ContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(initialState);

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = ()=> useContext(MyContext);