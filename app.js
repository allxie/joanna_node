var express = require("express");
var app = express();

app.get('/', (req, res)=> {res.send("Hello World")});
app.listen(3000, ()=>{console.log("Hey I'm listening")}); //new es6 arrow syntax



