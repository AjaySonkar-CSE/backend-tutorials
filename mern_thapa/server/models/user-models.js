const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



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

// generate token method
userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
    } catch (error){
        console.log(error);
    }
}

userSchema.methods.comparePassword = async function (password) {

    // user = this.password;

    try{
        return await bcrypt.compare(password, this.password);
    }catch (error) {
        console.log(error);
    }
}

// define a model or the collection in the database
const User = new mongoose.model("User", userSchema);

module.exports = User;


// what is jwt
// JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims to be
//  transferred between two parties.


// components of jwt
// 1. Header: The header typically consists of two parts: the type of token (JWT) and the signing
//  algorithm being used (e.g., HMAC SHA256 or RSA).

// 2. Payload: The payload contains the claims, which are statements about an entity
//  (typically, the user) and additional data. Claims can be registered (predefined), public,
//  or private.

// 3. Signature: The signature is created by taking the encoded header, the encoded payload, 
// a secret key, and the specified algorithm to sign the token. This ensures that the token
//  has not been tampered with and can be verified by the recipient using the same secret key.