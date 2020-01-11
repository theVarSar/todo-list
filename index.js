const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require('./src/routes');
const db_config = require('./config/db.json');
const app = express();

mongoose.connect(db_config.mongo, { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());
app.use(routes);

app.use(function(err, req, res, next){
    console.log(err);
    res.send({error: err.message});
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server started at port 3000!"); 
});