const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

//                password hashing
app.get('/password', function (req, res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("myPassword", salt, function(err, hash) {
            console.log(hash);
        });
    });
})

app.get('/Pcheck', function (req, res){
    bcrypt.compare("myPassword", "$2b$10$tSjkC28ea8Vbh3/eACQZKObTyGUJTDZYBNLYkcO4MS5z1CsVrYtyu", function(err, result) {
        console.log(result);
    });
})

//          jwt

app.get('/jwtt', function (req, res){
    let token = jwt.sign({email: "aja@example.com"}, "secret");
    console.log("token", token);
    res.send("done");
})

app.get("/readjwt", function(req, res){
    let data = jwt.verify("eyJhbGciOiJIUz)

app.get('/', function (req, res){
    res.cookie("name", "Raigarh SM");
    res.send("done");
})



app.get('/read', function (req, res){
    console.log(req.cookies);
    res.send("done");
})

app.listen(3000);