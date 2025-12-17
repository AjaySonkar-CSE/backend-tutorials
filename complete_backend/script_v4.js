// Express.js Framework:

// MERN

// Introduction to Express.js
// express js ek npm package hai
// framework -> flow 
// manages everything from receiving the request and giving the response


// Setting up a basic Express application.
// Routing.
// Middleware.
// Request and response handling.
// Error handling.



const express = require('express')
const app = express()


app.use(function(req, res, next){
    console.log('middleware chala');
    next();
})



//----------------------------------------------// routs create karna
app.get('/',function (req, res){
    res.send('Hello worlddddddddddddddd')
})

app.get("/profile", function(req, res){
    res.send("profile page")
})

app.listen(3000)


// ------------------------------------// Middleware
