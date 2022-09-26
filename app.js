//jshint esversion :6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var currrentDay = today.getDay();  // this is to get the todays date value sunday to saturday -->0 to 6
    var day = " ";
    switch(currrentDay){
        case 0: 
        day ="Sunday";
        break;
        case 1: 
        day ="Monday";
        break;
        case 2: 
        day ="Tuesday";
        break;
        case 3: 
        day ="Wednesday";
        break;
        case 4: 
        day ="Thursday";
        break;
        case 5: 
        day ="Friday";
        break;
        case 6: 
        day ="Saturday";
        break;
        default:
            console.log("Error:Current day is equal to the" + currrentDay);
    }

        // res.sendFile(__dirname+"/weekday.html"); // this will send an entire html file 
        // res.write("<p>You have to woork today!!</p>");
        // res.write("<h1>Bruh , this is a working day!</h1>");//res.send( ) will work for one time only
        // res.send();
    

    res.render("list", { kindofDay: day }); //this will set the value of varaible kidofday in ejs file extention
    // res.sendFile(__dirname+"/weekend.html");
});


app.listen(3000, function (req, res) {
    console.log("Server running at 3000");
})




// in ejs file we used <% %> which will help to ingnore the other tags 