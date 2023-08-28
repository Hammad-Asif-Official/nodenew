const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejs").then(() => {
    console.log("database connection successfull");
}).catch((e) => {
    console.log(e);
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confpassword: {
        type: String,
        required: true,
    }


})

const user = mongoose.model("user", schema);
module.exports = user;