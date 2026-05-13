// controllers

// explain the controllers in node js
// In Node.js, controllers are responsible for handling the logic of processing incoming requests and sending
//  responses back to the client. They act as an intermediary between the routes and the models (database).
//  Controllers contain functions that perform specific actions based on the request received, such as creating
//  a new user, fetching data from the database, or updating existing records. They help in organizing the code
//  and separating concerns, making it easier to maintain and scale the application.


// home logic

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("router Hello World");

    } catch (error) {
        console.log(error);
    }
}


// register logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        res
            .status(200)
            .json({message: req.body });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {home, register};