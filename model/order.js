const mongoose = require("mongoose");

const Table = new mongoose.Schema(
    {
        email: String,
        category: String,
        picksearch: String,
        pickuptype: String,
        pickupunit: String,
        pickupbuzzer: String,
        pickupadditional: String,
        pickupstore: String,
        pickupcompany: String,
        pickuptime: String,
        price: String,
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
        vehicle:String,
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