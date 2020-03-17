import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import GlobalCases from "../GlobalCases/GlobalCases";
import Countries from "../Countries/Countries";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const { fetchingData, error } = useContext(GlobalContext);

  let component;

  if (fetchingData) {
    component = <Spinner />;
  } else if (error) {
    component = <p>{error}</p>;
  } else {
    component = (
      <>
        <GlobalCases />
        <Countries />
      </>
    );
  }

  return (
    <section>
      <div className="container">{component}</div>
    </section>
  );
};

export default Home;
