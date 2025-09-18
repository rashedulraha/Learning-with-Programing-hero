import React, { use } from "react";

const Countries = ({ countriesLoadData }) => {
  const countriesData = use(countriesLoadData);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h1>Countries length: {countries.length}</h1>
    </div>
  );
};

export default Countries;
