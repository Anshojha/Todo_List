//jshint esversion :6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let workItems =[];
let items = ["Buy Food","Eat Food","cook food"]; //this is necessary because item is not defined globally
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
    res.render("list", { ListTitle: day, newListItems: items }); //this will set the value of letaible kidofday in ejs file extention
    // res.sendFile(__dirname+"/weekend.html");
});




app.post("/", function (req, res) {
    let item = req.body.newItem; 
    console.log(item);
    console.log(req.body.list);
    if(req.body.list==="Work"){

        workItems.push(item);
        res.redirect("/work");
    }else{
        console.log("else working!!");
        console.log(req.body);
        items.push(item);
        res.redirect("/");
    }
      //fetching the data from the input button after get trigger
    //  res.render("list",{newListItem:item}); // here we are rendering two times res.sender so we have two use intead this code nextline
 
});

app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work list",newListItems:workItems});
});


app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000, function (req, res) {
    console.log("Server running at 3000");
})




// in ejs file we used <% %> which will help to ingnore the other tags 