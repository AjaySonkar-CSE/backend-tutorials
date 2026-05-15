const validate = (schema) => async (req, res, next) => {
    try {

        const pasebody = await schema.parseAsync(req.body);
        req.body = pasebody;
        next();
    }catch(err){
        const status = 422;
        const message = "fill the required fields properly";
        const extraDetails = err.issues[0].message;
        const error = {
            status,
            message,
            extraDetails
        };
        console.log(error);
        // res.status(400).json({ message: err.issues[0].message });

        next(error);
    }
}

module.exports = validate;