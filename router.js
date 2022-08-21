
const { createClient, loginClient  } = require("./controllers/client");
const { getData,getIdData,createData,deleteData}= require("./controllers/order");
const { createAdmin, loginAdmin  } = require("./controllers/admin")
const router =  require("express").Router();
router.get("/",(req,res)=> {
    res.send("ankush dubey");
})
router.get("/order",getData);
router.post("/order",createData);
router.put("/order/:orderId",getIdData);
router.delete("/order/:orderId",deleteData);

router.post("/clientregister", createClient);
router.post("/Clientlogin", loginClient);

router.post("/adminregister", createAdmin);
router.post("/adminlogin", loginAdmin);
module.exports = router;