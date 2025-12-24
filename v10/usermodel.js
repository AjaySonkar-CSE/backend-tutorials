// mongoose setup


// CODE                               Database
// -------------------------------------------------------
// mongoose.connect  ->         database create
// model create      ->         Collection
// CREATE code       ->         document


const mongoose = require('mongoose');


// mongoose.connect(`mongodb://localhost:27017/test`)
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})



//------- model ---> crud

module.exports = mongoose.model("user", userSchema);