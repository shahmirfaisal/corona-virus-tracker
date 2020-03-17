import React from "react";

const Country = ({
  country: {
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    critical
  }
}) => {
  return (
    <div className="country">
      <h3 className="country__name">{country}</h3>
      <div className="country__detail">
        <div className="country__detail-left">
          <p>
            Cases: <span>{cases}</span>
          </p>
          <p>
            Deaths: <span>{deaths}</span>
          </p>
          <p>
            Recovered: <span>{recovered}</span>
          </p>
        </div>

        <div className="country__line"></div>

        <div className="country__detail-right">
          <p>
            Today's Cases: <span>{todayCases}</span>
          </p>
          <p>
            Today's Deaths: <span>{todayDeaths}</span>
          </p>
          <p>
            Critical: <span>{critical}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
