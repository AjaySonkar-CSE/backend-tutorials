const validate = (schema) => async (req, res, next) => {
    try {

        const pasebody = await schema.parseAsync(req.body);
        req.body = pasebody;
        next();
    }catch(error){
        res.status(400).json({ message: error.issues[0].message });
    }
}

module.exports = validate;