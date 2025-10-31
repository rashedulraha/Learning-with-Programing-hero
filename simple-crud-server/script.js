const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// middle Ware
app.use(cors());
app.use(express.json());

//! get mongoBD uri
const uri =
  "mongodb+srv://simpleDevUser:CWA2aQZp31vTJkLK@simpleproject.deo4wzy.mongodb.net/?appName=SimpleProject";

//! Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //    await client.close();
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("simple crud server is running ", port);
});
