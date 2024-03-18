const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//UPDATE
//for updation user id should be similar to the path id
router.put("/:id", async (req, res)=>{
    //params is also a req which we are taking from '/id' this url
    //params is not body because we are not sending it
    if(req.body.userId === req.params.id){
        //if we are any password inside our body
        if(req.body.password){
            //we need to hash again 
            const salt = bcrypt.genSalt(10);
            //password is changed
            // let plaintext = req.body.password.toString();
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        try{
            //update the user
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body, 
            },{new:true});
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You can update only you account!");
    }
   
});
//DELETE
module.exports = router;