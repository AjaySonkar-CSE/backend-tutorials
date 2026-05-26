// controllers

// explain the controllers in node js
// In Node.js, controllers are responsible for handling the logic of processing incoming requests and sending
//  responses back to the client. They act as an intermediary between the routes and the models (database).
//  Controllers contain functions that perform specific actions based on the request received, such as creating
//  a new user, fetching data from the database, or updating existing records. They help in organizing the code
//  and separating concerns, making it easier to maintain and scale the application.


const User = require("../models/user-models");
const bcrypt = require("bcrypt");

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
        // console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already existtt" });
        }

        // hash the password
        // const saltRounds = 10;
        // const hash_password = await bcrypt.hash(password, saltRounds);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
        });

        res
            .status(201)
            .json({message: "User created successfully", user: userCreated, token: await userCreated.generateToken() , 
                userId: userCreated._id.toString(),
            });

    } catch (error) {
        console.log(error);
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;   

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = userExist.comparePassword(password);

        if (user) {
            res     
            .status(200)
            .json({message: "login successfull", 
                token: await userExist.generateToken() , 
                userId: userExist._id.toString(),
            });
        }else {
            res.status(400).json({ message: "Invalid credentials" });
        }

    }
    catch (error) {
        // res.status(500).json({ message: "Internal server error" });
        next(error);
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);

        return res.status(200).json({ user: userData });
    }catch (error) {
        console.log("error in user controller", error);
    }
}

module.exports = {home, register, login, user};