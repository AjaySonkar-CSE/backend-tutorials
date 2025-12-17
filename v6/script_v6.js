// setting up parsers for form

// setting up ejs for ejs pages(frontend templating engine)
//          npm i ejs
//          setup ejs as a view engine

// setting up public static files


// dynamic routing
//      dynamic routing
//      how to get data coming from frontend at backend route



const express = require('express');
const app = express();
const Path = require('path');

// ----------------------------------------------// parsers for form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(Path.join(__dirname, 'public'))); // static files setup (serves /stylesheets/* and /javascripts/*)

// ----------------------------------------------// ejs setup



app.get("/", function(req, res){
    res.render("index"); //   renders index.ejs from views folder

});

app.get("/profile/:username", function(req, res){
    res.send(req.params.username);
})

app.get("/profile/:username/:age", function(req, res){
    res.send(`Username is ${req.params.username} and age is ${req.params.age}`);
})

app.listen(3000, function(){
    console.log("server started at port 3000"); 

})




