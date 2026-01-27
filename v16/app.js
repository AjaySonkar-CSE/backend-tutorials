const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');



app.get('/', (req, res) => {
    res.send('Hello World from v16 app.js');
})

app.get('/create', async function(req, res) {
    let user = await userModel.create({
        username: 'harsh',
        age: 24,
        email:"harsh@example.com"
    })
    res.send(user);
})

app.get('/post/create', async function(req, res) {
    let post = await postModel.create({
        postdata: "This is my first post",
        user: "6978958c0d989d1b12c9f941"
    })

    let user = await userModel.findOne({_id: "6978958c0d989d1b12c9f941"});
    user.posts.push(post._id);
    await user.save();


    res.send({post, user});
})

app.listen(3000);