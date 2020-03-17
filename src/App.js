import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Precautions from "./Components/Precautions/Precautions";
import GlobalContextProvider from "./Context/GlobalContext";

const App = () => {
  return (
    <div>
      <Header />

      <GlobalContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/precautions" component={Precautions} />
      </GlobalContextProvider>
    </div>
  );
};

export default App;
