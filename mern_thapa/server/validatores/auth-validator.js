const { sign } = require("jsonwebtoken");
const { z } = require("zod");

// create a schema for register validation
const signupSchema = z.object({
    username: z
    .string({required_error: "Username is required"})
    .trim()
    .min(3, {message: "Username must be at least 3 characters long"})
    .max(20, {message: "Username must be at most 20 characters long"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"}),
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone must be at least 10 characters long"})
    .max(15, {message: "Phone must be at most 15 characters long"}),
    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(6, {message: "Password must be at least 6 characters long"})
    .max(100, {message: "Password must be at most 100 characters long"}),
});


module.exports = signupSchema;