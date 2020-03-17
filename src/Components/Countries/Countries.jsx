import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Countries = () => {
  const { countries } = useContext(GlobalContext);

  useEffect(() => {
    console.log(countries);
  });

  return (
    <section className="countries">
      <h2 className="heading">
        <i className="fas fa-flag"></i> Search for a specific country:
      </h2>
    </section>
  );
};

export default Countries;
