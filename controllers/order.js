
const client = require("../model/order");

const getData = (req,res) =>{
    client.find((err,data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    });
};

const getIdData = (req,res) => {
    client.findById({_id: req.params.dataId},(err,data) =>{
        if(err){
            res.send(err);
        }
        res.json(data)
    });
};
const createData =  async (req,res) => {
    const { itemname,dimensions, dimensionslength,dimensionsheight,dimensionswidth,itemweight,pickuptime,pickupprice,category,pickupsearch,pickuptype,pickupstore,pickupcompany,pickupunit,pickupbuzzer,pickupadditional,dropcompany,dropunit,dropbuzzer,dropadditional,delivery,selectedFile,itemweighttype,dropsearch,droptype } = req.body
    
            const newData = new client({
                itemname: itemname,
                dimensions:dimensions,
                dimensionslength:dimensionslength,
                dimensionsheight:dimensionsheight,
                dimensionswidth:dimensionswidth,
                itemweight: itemweight,
                itemweighttype:itemweighttype,
                pickuptime: pickuptime,
                pickupprice: pickupprice,
                category: category,
                pickupsearch: pickupsearch,
                pickuptype: pickuptype,
                pickupstore: pickupstore,
                pickupcompany: pickupcompany,
                pickupunit: pickupunit,
                pickupbuzzer: pickupbuzzer,
                pickupadditional: pickupadditional,
                dropsearch: dropsearch,
                droptype:droptype,
                dropcompany: dropcompany,
                dropunit: dropunit,
                dropbuzzer: dropbuzzer,
                dropadditional: dropadditional,
                delivery:delivery,
                selectedFile:selectedFile,
            })
            newData.save(err => {
               if(err){ 
                res.send(err)
               } else {
                res.send({ message : "Order Placed Successfully"})
               }
            })
        
    
 }
 const deleteData = (req,res) =>{
    client.deleteOne({_id : req.params.dataId})
    .then(() => res.json({ message:" Deleted"}))
    .catch((err) => res.send(err));
   }

   module.exports = {
    getData,
    getIdData,
    createData,
    deleteData,
};
