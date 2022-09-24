const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var today = new Date();
    var currrentDay = today.getDay();  // this is to get the todays date value sunday to saturday -->0 to 6
    if(currrentDay===6){
        res.sendFile(__dirname+"/weekend.html");
    }else{
        res.sendFile(__dirname+"/weekday.html"); // this will send an entire html file 
        // res.write("<p>You have to woork today!!</p>");
        // res.write("<h1>Bruh , this is a working day!</h1>");//res.send( ) will work for one time only
        // res.send();
    }

  
})




app.listen(3000,function(req,res){
    console.log("Server running at 3000");
})
