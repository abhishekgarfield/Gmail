const express = require("express");
const mongoClient = require("mongodb").MongoClient();
const jwt = require("jsonwebtoken");
const v4 = require("uuid");
require("dotenv").config();
const port = process.env.PORT || 8000;
const uri = "";
var app = express();

app.use(express.json());

const client = new mongoClient(uri);
await client.connect((err, client) => {
  if (err) {
    console.log(err);
  } else {
    const database = client.db("app-data");
    app.listen(port, () => {
      console.log(`sServer is running on ${port}`);
    });
  }
});

app.get("/test", async (req, res) => {
  const collection = database.collection("users");
  const users = collection.find().toArray();
  res.send(users);
});
