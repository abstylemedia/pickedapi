const mongoose = require("mongoose");

const Table = new mongoose.Schema(
    {
        itemname: String,
        itemsize: String,
        itemweight: String,
        pickuptime: String,
        pickupprice: String,
        category: String,
        pickups: String,
        pickuptype: String,
        pickupstore: String,
        pickupcompany: String,
        pickupunit: String,
        pickupbuzzer: String,
        pickupadditional: String,
        pickups: String,
        dropcompany: String,
        dropunit: String,
        dropbuzzer: String,
        dropadditional: String,
    },
    {
        collection:"OrderTable",
    }
)
module.exports = mongoose.model("Order",Table)