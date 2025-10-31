import "./App.css";
import Users from "./Components/Users";

const userPromise = fetch("http://localhost:3000/users").then((result) => {
  return result.json();
});
console.log(userPromise);

function App() {
  return (
    <>
      <h1>Simple crud</h1>
      <Users />
    </>
  );
}

export default App;
