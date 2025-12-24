const express = require('express');
const app = express();
const Path = require('path');
const fs = require('fs');

// setting up ejs for ejs pages (frontend templating engine)
//          npm i ejs
//          setup ejs as a view engine

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, 'public'))); // static files setup
// make views path explicit (helps when running from different CWDs)
app.set('views', Path.join(__dirname, 'views'));


// dynamic routing example  

app.get("/", function(req, res){
    // res.send("hello world from v7");
    fs.readdir(`./files`, function(err, files){
        console.log(files);

        res.render("index", {files: files}); // renders index.ejs from views folder
    })
})

app.get("/file/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata: filedata}); 

    })
})

app.get("/edit/:filename", function(req, res){
    res.render('edit', {filename: req.params.filename});
})

app.post('/edit', function(req, res){
    console.log(req.body);
    fs.rename(`./files/${req.body.title}`, `./files/${req.body.new}`, function(err){
        res.redirect("/");
    })
})

app.post("/create", function(req, res){
    console.log(req.body);

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");

    })

})

// app.listen(3000)

// start server with basic error handling
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err && err.stack ? err.stack : err);
    // keep process alive for nodemon to restart
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason && reason.stack ? reason.stack : reason);
});