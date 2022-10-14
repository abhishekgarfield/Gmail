const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const v4 = require("uuid").v4;
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;
const uri =
  "mongodb+srv://garfield:1234@cluster0.qxk33ev.mongodb.net/?retryWrites=true&w=majority";
var app = express();

app.use(express.json());
app.use(cors());

MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.log("UNABLE TO CONNECT");
  } else {
    database = client.db("app-data");
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  }
});

app.get("/test", async (req, res) => {
  const collection = database.collection("users");
  const users = await collection.find().toArray();
  res.send(users);
});
app.post("/signup", async (req, res) => {
  console.log("Signup");
  const user = req.body;
  console.log(user);
  const senitizedEmail = user.email.toLowerCase();
  const user_id = v4();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const senitizedUser = {
    user_id: user_id,
    name: user.name,
    email: senitizedEmail,
    password: hashedPassword,
    profile_pic: user.profile_pic,
  };
  try {
    const collection = database.collection("users");
    const findUser = await collection.findOne({ email: senitizedEmail });
    if (findUser) {
      console.log(findUser);
      return res.status(403).json("User already exists");
    } else {
      const addUser =await collection.insertOne(senitizedUser);
      const token = jwt.sign(addUser, user.email, {
        expiresIn: 60 * 24,
      });
      res.status(200).json({ authToken: token, user_id: user_id });
    }
  } catch (err) {
    console.log(err);
  }
});
