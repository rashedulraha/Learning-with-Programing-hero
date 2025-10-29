import { Suspense } from "react";

const Home = () => {
  // ! data load t backend
  const dataLoad = fetch("http://localhost:3000/user")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });

  return <div></div>;
};

export default Home;
