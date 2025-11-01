import Container from "./Components/Container";
import Users from "./Components/Users";
const userDataPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Container>
        <h1>Simple crud</h1>
        <Users userDataPromise={userDataPromise} />
      </Container>
    </>
  );
}

export default App;
