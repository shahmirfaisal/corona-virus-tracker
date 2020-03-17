import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const GlobalCases = () => {
  const { globalCases } = useContext(GlobalContext);

  return (
    <section className="global-cases">
      <h2 className="heading">
        <i className="fas fa-globe-americas"></i> Global Cases:
      </h2>

      {globalCases ? (
        <>
          <div className="global-cases__cases">
            <div className="global-cases__case">
              Total Cases: <span>{globalCases.cases}</span>
            </div>

            <div className="global-cases__case">
              Total Deaths: <span>{globalCases.deaths}</span>
            </div>

            <div className="global-cases__case">
              Total Recoveries: <span>{globalCases.recovered}</span>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default GlobalCases;
