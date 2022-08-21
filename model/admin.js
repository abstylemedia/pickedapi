const mongoose = require("mongoose");
const UserRegisterScehma = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        phone: String,
        password: String
    },
    {
        collection:"AdminInfo",
    }
) 

module.exports = mongoose.model("Admin", UserRegisterScehma);