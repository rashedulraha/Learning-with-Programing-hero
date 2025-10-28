import { Suspense } from "react";
import User from "../Components/User";

const Home = () => {
  // ! data load t backend
  const dataLoad = fetch("http://localhost:3000/user")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });

  return (
    <div>
      <Suspense fallback={"data loading"}>
        <User dataLoad={dataLoad} />
      </Suspense>
    </div>
  );
};

export default Home;
