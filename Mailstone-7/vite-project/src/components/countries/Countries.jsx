import React, { use } from "react";
import Country from "../Countrys/Country";
import "./countrise.css";

const Countries = ({ countriesLoadData }) => {
  const countriesData = use(countriesLoadData);
  const countries = countriesData.countries;

  return (
    <>
      <h1>Country </h1>
      <p>From sources across the web</p>
      <hr className="horizontalLine" />
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} countryName={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
