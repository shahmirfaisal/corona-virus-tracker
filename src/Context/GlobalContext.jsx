import React, { createContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  globalCases: null,
  countries: null,
  error: null,
  fetchingData: false
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    dispatch({ type: "UPDATE_FETCHING", data: true });

    Promise.all([axios.get("all"), axios.get("countries")])
      .then(data => {
        dispatch({ type: "UPDATE_FETCHING", data: false });
        dispatch({ type: "ADD_GLOBAL_CASES", data: data[0] });
        dispatch({ type: "ADD_COUNTRIES", data: data[1] });
      })
      .catch(er => {
        console.log(er);
        dispatch({ type: "UPDATE_FETCHING", data: false });
        dispatch({ type: "ERROR", data: er });
      });
  };

  return (
    <GlobalContext.Provider value={{ ...state, fetchData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
