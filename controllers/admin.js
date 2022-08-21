const Admin = require("../model/admin")

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ekhfvoheohoho7126873970()gasdgKUGFUFHQORUHRUOHUOQHREHL";

const createAdmin = async (req, res) => {
    const {fname, lname, email, phone, password} =req.body
    Admin.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const client = new Admin({
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

const loginAdmin = async (req,res) => {
    const { email, password } =req.body;
    
   Admin.findOne({email: email}, (err, user) => {
    if (!user) {
        return res.send({ message:"user Not Found"});
    } else {
    if( password === user.password){
        const token = jwt.sign({}, JWT_SECRET);

        
        return res.send({message:"ok", data: user, token: token});
    } else{
        return res.send({ message:"Wrong Password"});
    }
    
    }
    });
}
module.exports = {
    createAdmin,
    loginAdmin
  };