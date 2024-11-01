//post

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { v4: uuidv4 } = require("uuid");


app.use(bodyParser.json());

app.post("/users", (req, res, next) => {
//   let name = req.body.name;
//   let email = req.body.email;
const { name , email } = req.body;

  let createuser = {
    id: uuidv4(),
    name: name,
    email: email,
  };
  console.log("new user:", createuser);
  res.status(200).json({ success: "true", data: createuser });
//users.push(createuser);
  if (!email || !name) {
    return res.status(400).json({ message: "Cannot create", success: false });
  }
});
app.listen(8003, () => {
  console.log("yeh chal rha hy: http://localhost:8003");
});
