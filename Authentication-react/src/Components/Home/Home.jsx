import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Home = () => {
  const userInformation = useContext(AuthContext);
  console.log(userInformation);

  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
