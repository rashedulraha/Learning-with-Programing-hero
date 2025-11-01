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

    const simpleUserDB = client.db("simpleUserDB");
    const userCollection = simpleUserDB.collection("users");

    //! add data base related apis here

    app.get("/users", async (req, res) => {
      const userInfo = userCollection.find();
      const result = await userInfo.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
      // console.log("hitting the apis ", newUser);
    });

    app.delete("/users/:id", (req, res) => {
      const params = req.params;
      console.log(params);

      console.log("delete user from data base");
    });

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
