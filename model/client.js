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
        collection:"ClientTable",
    }
) 

module.exports = mongoose.model("Client", UserRegisterScehma);