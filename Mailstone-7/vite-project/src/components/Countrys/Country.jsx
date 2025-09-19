import { useState } from "react";

const Country = ({ countryName, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountry);

  // console.log(countryName.population);
  const HandleVisited = () => {
    setVisited(!visited);

    handleVisitedCountry(countryName);
  };
  return (
    <>
      <div className={`flex-two ${visited && "bg"}`}>
        <div className="flex">
          <figure className="">
            <img
              src={countryName.flags.flags.png}
              alt={countryName.flags.flags.alt}
            />
          </figure>
          <div className="flex2">
            <h3>Name : {countryName.name.common}</h3>
            <p className="countryPopulation">
              {countryName.population.population}
            </p>
            <p className="countryPopulation">
              Area: {countryName.area.area} :{" "}
              <span
                className={
                  countryName.area.area > 300000 ? "B-Country" : " S-country"
                }
              ></span>
              {countryName.area.area > 300000 ? " B Country" : " S country"}
            </p>
          </div>
          <div className="icon">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div>
          <button onClick={HandleVisited}>
            {visited ? "Visited" : "Not visited"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
