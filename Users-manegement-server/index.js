const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("User server is available this side ");
});

const user = [
  { id: 1, name: "Rasehdul islam", email: "rashedulislam@gmail.com" },
  { id: 3, name: "Rakibul islam", email: "rakibulislam@gmail.com" },
  { id: 3, name: "Raihanul islam", email: "raihanulislam@gmail.com" },
];

app.get("/user", (req, res) => {
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("post method called", res.body);
  const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is  running port number : ${port}`);
});
