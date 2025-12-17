// Express.js Framework:

// MERN

// Introduction to Express.js --------------- npm i express
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
    return next(new Error("kuch to error hai"));
})

//----------------------------------------------// error handling
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("something broke!");
})

app.listen(3000)


// ------------------------------------// Middleware
