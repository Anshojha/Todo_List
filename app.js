//jshint esversion :6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food","Eat Food","cook food"]; //this is necessary because item is not defined globally
let workItem =[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));  // tp use body-parser we need to write this to set input from the user
app.use(express.static("public"));
app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);  // return day value as a string in englis US form

    // let currrentDay = today.getDay();  // this is to get the todays date value sunday to saturday -->0 to 6
    // let day = " ";
    // switch(currrentDay){
    //     case 0: 
    //     day ="Sunday";
    //     break;
    //     case 1: 
    //     day ="Monday";
    //     break;
    //     case 2: 
    //     day ="Tuesday";         
    //     break;
    //     case 3: 
    //     day ="Wednesday";
    //     break;
    //     case 4: 
    //     day ="Thursday";
    //     break;
    //     case 5: 
    //     day ="Friday";
    //     break;
    //     case 6: 
    //     day ="Saturday";
    //     break;
    //     default:
    //         console.log("Error:Current day is equal to the" + currrentDay);
    // }

    // res.sendFile(__dirname+"/weekday.html"); // this will send an entire html file 
    // res.write("<p>You have to woork today!!</p>");
    // res.write("<h1>Bruh , this is a working day!</h1>");//res.send( ) will work for one time only
    // res.send();


    res.render("list", { ListTitle: day, newListItems: items }); //this will set the value of letaible kidofday in ejs file extention
    // res.sendFile(__dirname+"/weekend.html");
});

app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work List",newListItems:workItem});
})

app.post("/work",function(res,req){
    // console.log(req.body);
    let item = req.body.newItem;
    workItem.push(item);
    res.redirect("/work");
})
app.post("/", function (req, res) {
    let item = req.body.newItem; 
    if(req.body==="work"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
      //fetching the data from the input button after get trigger
    //  res.render("list",{newListItem:item}); // here we are rendering two times res.sender so we have two use intead this code nextline
 
});
app.listen(3000, function (req, res) {
    console.log("Server running at 3000");
})




// in ejs file we used <% %> which will help to ingnore the other tags 