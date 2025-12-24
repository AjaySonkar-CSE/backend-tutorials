const express = require('express');
const app = express();
const Path2D = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(Path2D.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
})


app.listen(3000);


//   5:42:00