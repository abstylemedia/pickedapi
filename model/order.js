const mongoose = require("mongoose");

const Table = new mongoose.Schema(
    {
        category: String,
        picksearch: String,
        pickuptype: String,
        pickupstore: String,
        pickupcompany: String,
        pickupunit: String,
        pickupbuzzer: String,
        pickupadditional: String,
        pickuptime: String,
        pickupprice: String,
        dropsearch: String,
        dropcompany: String,
        droptype:String,
        dropunit: String,
        dropbuzzer: String,
        dropadditional: String,
        itemname: String,
        dimensions:String,
        dimensionslength:String,
        dimensionsheight:String,
        dimensionswidth:String,
        itemweight: String,
        itemweighttype:String,
        delivery:String,
        selectedFile:String,
        createdAt: {
            type: Date,
            default: Date.now,
          },
        status:{
            type: String,
            default: "Pending",
          },
    },
    {
        collection:"OrderTable",
    }
)
module.exports = mongoose.model("Order",Table)