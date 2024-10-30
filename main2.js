const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let users = [
  { id: 0, name: "Ahmed", email: "ibrahimahmed12333@gmail.com" },
  { id: 1, name: "Ibrahim", email: "Ibrahimkhan@gmail.com" },
  { id: 2, name: "hamza", email: "HamzaAli@gmail.com" },
];

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "userPath", data: users, success: true });
});

app.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const iduser = users.find((u) => u.id == id);
  if (iduser == id) {
    res.status(200).json({ message: "user aa gya ji", data: iduser });
  } else {
    res.status(500).json({ message: "user tou nahi hy" });
  }
});

app.listen(8003, () => {
  console.log("Ay run hosi http://localhost:8003");
});
