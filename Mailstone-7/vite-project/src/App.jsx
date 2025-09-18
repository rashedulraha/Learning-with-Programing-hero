import React, { Suspense } from "react";
import Countries from "./components/countries/Countries";

// load api to promise

const countriesLoadData = fetch(
  `https://openapi.programming-hero.com/api/all`
).then((res) => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Nadir vai loading...</p>}>
        <Countries countriesLoadData={countriesLoadData} />
      </Suspense>
    </div>
  );
};

export default App;
