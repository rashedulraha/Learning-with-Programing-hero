// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PostCard from "../Components/PostCard";

const Home = () => {
  const { plants } = useLoaderData();
  {
    console.log(plants);
  }

  // const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   fetch(`https://openapi.programming-hero.com/api/plants`)
  //     .then((res) => res?.json())
  //     .then((json) => setPlants(json.plants));
  // }, []);

  return (
    <>
      <div className="container mx-auto  px-4 mt-5 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {plants.map((plant) => (
            <PostCard plant={plant} key={plant.id} />
          ))}
          {console.log(plants)}
        </div>
      </div>
    </>
  );
};

export default Home;
