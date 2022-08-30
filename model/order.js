const mongoose = require("mongoose");

const Table = new mongoose.Schema(
    {
        itemname: String,
        dimensions:String,
        dimensionslength:String,
        dimensionsheight:String,
        dimensionswidth:String,
        itemweight: String,
        itemweighttype:String,
        pickuptime: String,
        pickupprice: String,
        category: String,
        pickupsearch: String,
        pickuptype: String,
        pickupstore: String,
        pickupcompany: String,
        pickupunit: String,
        pickupbuzzer: String,
        pickupadditional: String,
        dropsearch: String,
        droptype:String,
        dropcompany: String,
        dropunit: String,
        dropbuzzer: String,
        dropadditional: String,
        delivery:String,
        selectedFile:String,
    },
    {
        collection:"OrderTable",
    }
)
module.exports = mongoose.model("Order",Table)