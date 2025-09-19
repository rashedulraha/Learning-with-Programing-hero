import React, { use, useState } from "react";
import Country from "../Countrys/Country";
import "./countrise.css";

const Countries = ({ countriesLoadData }) => {
  const [visitedCountries, setVisitCountries] = useState([]);
  const handleVisitedCountry = (countryName) => {
    console.log("update visited country clicked", countryName);

    const newVisitedCountry = [...visitedCountries, countryName];
    setVisitCountries(newVisitedCountry);
  };
  const countriesData = use(countriesLoadData);
  const countries = countriesData.countries;

  return (
    <>
      <div className="header-container">
        <div>
          <h1>Country </h1>
          <p>From sources across the web</p>
        </div>
        <div
          style={{
            border: "1px solid red",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <p>You total visited country : {visitedCountries.length} </p>

          <div
            style={{
              width: "100%",
              height: "100px",
              overflow: "hidden",
              color: "green",
              textTransform: "capitalize",
            }}
          >
            <ol>
              {visitedCountries.map((countries) => (
                <li key={countries.name.common}>{countries.name.common}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <hr className="horizontalLine" />

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            countryName={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
