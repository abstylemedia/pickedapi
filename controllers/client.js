const Client = require("../model/client")

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ekhfvoheohoho7126873970()gasdgKUGFUFHQORUHRUOHUOQHREHL";

const createClient = async (req, res) => {
    const {fname, lname, email, phone, password} =req.body
    Client.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const client = new Client({
                fname,
                lname,
                email,
                phone,
                password,
            })
            client.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}

const loginClient = async (req,res) => {
    const { email, password } =req.body;
    
   Client.findOne({email: email}, (err, user) => {
    if (!user) {
        return res.send({ message:"user Not Found"});
    } else {
    if( password === user.password){
        const token = jwt.sign({}, JWT_SECRET);

        
        return res.send({message:"ok", data: user, token:token});
    } else{
        return res.send({ message:"Wrong Password"});
    }
    
    }
    });
}
module.exports = {
    createClient,
    loginClient
  };