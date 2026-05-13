// express.Router() is a class in the Express.js framework that allows you to create modular, mountable route
//  handlers. It provides a way to organize your routes and middleware into separate files or modules, 
// making your code more maintainable and easier to manage.

//in express.js, express.Router()  = > is a mini express application without all the server configuration but with the ability to difine
// routes, middlewares and even have its won set of route handlers. it allows us to modularize our routes and middelware
// to keep your code organized and maintainable.

//=======================================

// use the express.Router class to create modular, mountable route handlers. A Router instance is a complete
//  middleware and routing system; for this reason, it is often referred to as a "mini-app".

const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//     res.status(200).send("router Hello World");
// });

// router.route("/").get((req, res) => {
//     res.status(200).send("router Hello World");
// });

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);


module.exports = router;