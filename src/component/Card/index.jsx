import React from "react";
import "./styles.css";

const Countries = ({ name, capital, currency, population }) => {
  return (
    <div className="country-card">
      <p className="country-title">
        Country name: <span>{name}</span>
      </p>
      <p className="country-capital">
        Capital: <span>{capital}</span>
      </p>
      <p className="country-currency">
        Currency: <span>{currency}</span>
      </p>
      <p className="country-population">
        Population: <span>{population}</span>
      </p>
    </div>
  );
};

export default Countries;
