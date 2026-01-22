const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(cookieParser());

//                password hashing
app.get('/home', function (req, res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("myPassword", salt, function(err, hash) {
            console.log(hash);
        });
    });
})

app.get('/', function (req, res){
    res.cookie("name", "Raigarh SM");
    res.send("done");
})



app.get('/read', function (req, res){
    console.log(req.cookies);
    res.send("done");
})

app.listen(3000);