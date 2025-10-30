const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Anything ");
});

const uri =
  "mongodb+srv://Check-server:wIGHJBYA7ugqA2Gq@simpleproject.deo4wzy.mongodb.net/?appName=SimpleProject";

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

    const usersInformationDB = client.db("usersInformationDB");
    const usersCollection = usersInformationDB.collection("users");

    //! data base related work

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("hitting the post api ", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close()
  }
};

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
