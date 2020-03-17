import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Precautions from "./Components/Precautions/Precautions";
import { GlobalContext } from "./Context/GlobalContext";

const App = () => {
  const context = useContext(GlobalContext);
  useEffect(() => {
    context.fetchData();
  }, []);

  return (
    <div>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/precautions" component={Precautions} />
    </div>
  );
};

export default App;
