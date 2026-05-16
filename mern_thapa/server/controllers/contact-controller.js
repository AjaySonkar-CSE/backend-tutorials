const { ca } = require("zod/v4/locales");
const Contact = require("../models/contact-model");

const createForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: "Message sent successfully" });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error sending message" });
    }
}

module.exports = createForm;
