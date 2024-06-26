const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//UPDATE
//for updation user id should be similar to the path id
router.put("/:id", async (req, res) => {
    // console.log("put function called....");
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your account!");
    }
});


//DELETE
router.delete("/:id", async(req, res)=>{
    //params is also a req which we are taking from '/id' this url
    //params is not body because we are not sending it
    if(req.body.userId === req.params.id){
        //even after deleting the user we can still see its post for that we can delete its all posts of this user
        //first we will find this user the will find all posts of this user
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username});
                //delete the user
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted....");
            }catch(err){
                res.status(500).json(err);
            }
        }catch(err){
            //if can't find any user with this id
            res.status(404).json("User not found!")
        }
       
    }else{
        res.status(401).json("You can delete only you account!");
    }
   
});

//GET USER 
router.get("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;