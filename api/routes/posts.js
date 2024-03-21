const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
// const bcrypt = require('bcrypt');

//CREATE NEW POST
router.post("/", async(req, res)=>{
   const newPost = new Post(req.body);
   try{
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
   }catch(err){
    res.status(500).json(err)
   }
});


//UPDATE POST
//for updation user id should be similar to the path id
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.username === req.body.username) {
            try {
                await post.deleteOne();
                res.status(200).json({ message: "Post has been deleted" });
            } catch (error) {
                res.status(500).json({ message: "Error deleting post", error });
            }
        } else {
            res.status(401).json({ message: "You can delete only your post" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});


//GET POST
router.get("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get("/", async(req, res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;