const mongoose = require("mongoose");
const bcrypt = require("bcrypt");



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

});

// secure the password using bcryptjs
userSchema.pre("save", async function (next) {
    // console.log("pre save called", this);

    const user = this;

    if(!this.isModified("password")){
        next();
    }

    try {
        const saltRounds = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password, saltRounds);
        user.password = hash_password;
        
    } catch (error) {
        next(error);
    }
});


// define a model or the collection in the database
const User = new mongoose.model("User", userSchema);

module.exports = User;