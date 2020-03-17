import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Country from "../Country/Country";

const Countries = () => {
  const { countries, searchCountry } = useContext(GlobalContext);

  useEffect(() => {
    console.log(countries);
  });

  return (
    <section className="countries">
      <h2 className="heading">
        <i className="fas fa-flag"></i> Search for a specific country:
      </h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Search a country..."
          className="input-group__input"
          onChange={e => searchCountry(e.target.value)}
        />
        <div className="input-group__icon">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <section className="countries__grid">
        {countries
          ? countries.map((country, i) => <Country country={country} key={i} />)
          : null}
      </section>
    </section>
  );
};

export default Countries;
