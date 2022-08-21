
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
    const { itemname,itemsize,itemweight,pickuptime,pickupprice,category,pickups,pickuptype,pickupstore,pickupcompany,pickupunit,pickupbuzzer,pickupadditional,dropcompany,dropunit,dropbuzzer,dropadditional } = req.body
    
            const newData = new client({
                itemname: itemname,
                itemsize: itemsize,
                itemweight:itemweight,
                pickuptime:pickuptime,
                pickupprice:pickupprice,
                category:category,
                pickups:pickups,
                pickuptype:pickuptype,
                pickupstore:pickupstore,
                pickupcompany:pickupcompany,
                pickupunit:pickupunit,
                pickupbuzzer:pickupbuzzer,
                pickupadditional:pickupadditional,
                dropcompany:dropcompany,
                dropunit:dropunit,
                dropbuzzer:dropbuzzer,
                dropadditional:dropadditional
            })
            newData.save(err => {
               if(err){ 
                res.send(err)
               } else {
                res.send({ message : "Successfully Insert"})
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
