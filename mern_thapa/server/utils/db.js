const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/mern_admin";



const connectDB = async () => {
    try {

        await mongoose.connect(URI);
        console.log("db connected successfully");

    }
    catch (error) {
        console.error("db connection failed", error);
        process.exit(0);
    }
}


module.exports = connectDB;