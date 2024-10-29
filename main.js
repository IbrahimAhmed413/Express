// const Http = require('http');

const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.json({ message: "express" });
  const err = "couldnot access";
  next(err);
});
app.listen(8003, () => {
  console.log("This is running on http://localhost:8003");
});
app.use((req, res, error, next) => {
  console.log("err:", req);
});

//this middleware is not for error handling
// app.use('/' , (req, res)=>{
//     console.log("err: ", req);
// })
//node.js server creation code
// Http.createServer((req, res) =>{
//     res.write("helloworld");
//     res.end();

// }).listen(7000, ()=>{
//     console.log('port running on http://localhost:7000')
// })
