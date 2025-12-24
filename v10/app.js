// Node.js Basics:
// Introduction to Node.js.
// Installing Node.js and npm.

// npm init -y -----------<  package.json
// npm i express ---------<  package-lock.json
// npm i mongoose  ------------- > help to connect to node server to mongodb server



const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', (req, res) => {
    res.send("hay");
})

app.get('/create', async (req, res) =>{
    let createduser = await userModel.create({
        name: "ajay",
        email: "ajay@gmail.com",
        username: "ajay"
    })

    res.send(createduser);
})

app.get('/update', async (req, res) =>{
    let updateduser = await userModel.findOneAndUpdate({username: "harsh123"}, {name: "harsh verma"}, {new: true});
    res.send(updateduser);

})

app.get('/read', async (req, res)=>{
    // let users = await userModel.find({name: "harsh"});
    let users = await userModel.find();

    res.send(users);
})

app.get("/delete", async (req, res)=>{
    let users = await userModel.findOneAndDelete({username: "ajay"});
    res.send(users);
})

app.listen(3000);