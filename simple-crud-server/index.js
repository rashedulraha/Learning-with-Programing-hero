const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();

const port = process.env.PROT || 3000;

app.use(cors());
app.use(express.json());

//! get mongoBD uri
const uri =
  "mongodb+srv://simpleDevUser:CWA2aQZp31vTJkLK@simpleproject.deo4wzy.mongodb.net/?appName=SimpleProject";

//! mongoDB -> Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const userDB = client.db("userDB");
    const userCollection = userDB.collection("/users");

    app.post("/users", async function (res, req) {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello i'm home");
});

app.get("/users", (req, res) => {
  res.send("Hello i'm user");
});

app.listen(port, () => {
  console.log(`server is running port number : ${port}`);
});
