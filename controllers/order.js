
const client = require("../model/order");
const dotenv = require("dotenv");

dotenv.config();
const Stripe = require('stripe')(process.env.SECRET_KEY);
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
const payment = async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'CAD',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  }
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
    payment
};
