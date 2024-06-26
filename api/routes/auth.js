//express framework to use router method
const router = require("express").Router();
//modal we will be using here in authentication route is user

const User = require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
//it will connect with database do some verification, will return some respone
//all these will take some time, so we are using async function
router.post("/register", async (req, res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password, salt);

        //it will take everything in req
        // const newUser = new User(req.body)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass, //hashedPass
        })
        //save method is comming from mongoose
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("user registerd: ", user);
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async(req, res)=>{
    try{
        //find user
        const user = await User.findOne({username: req.body.username})
        //if there is no user
        !user && res.status(400).json("Wrong credentials!")

        //if there is user, we should validate the password
        //(sent password, password which we have hashed inside the mongodb)
        const validate = await bcrypt.compare(req.body.password, user.password);
        //if not validated
        !validate && res.status(400).json("Wrong credentials!")
        
        //it will take everything but not the password
        const {password, ...others} = user._doc;
        res.status(200).json(others);
        console.log("login user: ", user);

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;