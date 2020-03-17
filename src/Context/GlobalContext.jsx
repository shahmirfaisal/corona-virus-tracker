import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  globalCases: null,
  countries: null
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
