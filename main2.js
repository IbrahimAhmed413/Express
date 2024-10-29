const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use('/users', (req, res, next)=>{
res.status(200).json({message:'userPath'});
})
app.listen(8003, ()=>{
    console.log("Ay run hosi http://localhost:8003");
});