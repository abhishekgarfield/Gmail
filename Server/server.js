const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const v4 = require("uuid").v4;
const cors = require("cors");
const { CompassCalibrationOutlined } = require("@material-ui/icons");
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
      const addUser = await collection.insertOne(senitizedUser);
      const token = jwt.sign(addUser, user.email, {
        expiresIn: 60 * 24,
      });
      res.status(200).json({ authToken: token, user_id: user_id });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/signin", async (req, res) => {
  console.log("Signin");
  const user = req.body;
  const senitizedEmail = user.email.toLowerCase();
  const collection = database.collection("users");
  const findUser = await collection.findOne({ email: senitizedEmail });
  if (findUser) {
    const chkpassword = await bcrypt.compare(user.password, findUser.password);
    if (chkpassword) {
      const token = jwt.sign(findUser, findUser.user_id, {
        expiresIn: 60 * 24,
      });
      res.status(200).json({ authToken: token, user_id: findUser.user_id });
    } else {
      res.status(403).json("Password don't match");
    }
  } else {
    res.status(403).json("User doesn't exist ! please signup ");
  }
});

app.post("/sendemail", async (req, res) => {
  console.log("addemail");
  const email = req.body;

  const senitizedEmail = email.recievers_email.toLowerCase();
  const collection = database.collection("users");
  console.log(senitizedEmail);
  const reciever = await collection.findOne({ email: { $eq: senitizedEmail } });
  console.log(reciever);
  const id = v4();
  if (reciever) {
    const senitizedEmail = {
      id: id,
      sender_user_id: email.sender_user_id,
      recievers_user_id: reciever.user_id,
      recievers_email: reciever.email,
      sender_name: email.sender_name,
      email_content: email.email_content,
      subject: email.subject,
      timestamp: email.timestamp,
    };
    const collec = database.collection("email");
    const user = await collec.insertOne(senitizedEmail);
    console.log(user);
    return res.status(200).json("done");
  } else {
    return res.status(403).json("Email id doesnt exist !");
  }
});

app.get("/getuser", async (req, res) => {
  console.log("getuser");
  const { user_id } = req.query;
  const collection = database.collection("users");
  const user = await collection.findOne({ user_id: user_id });
  res.send(user);
});
app.get("/getinbox", async (req, res) => {
  console.log("inbox emails");
  const { user_id } = req.query;
  console.log(user_id)
  const collection = database.collection("email");
  const emails = await collection.find({ recievers_user_id: user_id }).toArray();
  res.send(emails);
  console.log(emails)
});
