const express = require("express");

const app = express();

//  middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create middleware

app.use(function (req, res, next) {
  console.log("middleware print");
  next();
});
app.use(function (req, res, next) {
  console.log("middleware print 2");
  next();
});
// create a routes

app.get("/", function (req, res) {
  res.send("champion mera anuj");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("not implement"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3000);
