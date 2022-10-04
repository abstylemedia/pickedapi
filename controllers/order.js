
const client = require("../model/order");

const getData = (req,res) =>{
    client.find((err,data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    });
};

const getIdData = async (req,res) => {
    const _id = req.params.id;
    client.findById((_id), (err, data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    });
    
};
const getClientData = async (req,res) => {
    const status = req.params.status;
    client.find({status: status}, (err, data)=>{
        if(err){
            res.send(err)
        }
        res.json(data)
    });
    
};

const createData =  async (req,res) => {
    const data = new client(req.body)
           await data.save(err => {
               if(err){ 
                res.send(err)
               } else {
                res.send({ message : "Order Placed Successfully"})
               }
            })
        
    
 }
 const upData = async (req,res) => {
    const _id = req.params.id;
       await client.findByIdAndUpdate(_id,req.body,{new: true}, )
       .then(() => res.json({ message: "Update" }))
    .catch((err) => res.send(err));
        
    
};
 const deleteData = (req,res) =>{
    const _id = req.params.id;
    client.findByIdAndDelete(_id)
    .then(() => res.json({ message:" Deleted"}))
    .catch((err) => res.send(err));
   }

   module.exports = {
    getData,
    getIdData,
    createData,
    deleteData,
    upData,
    getClientData,
};
