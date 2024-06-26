//create express server
const express = require("express");
const app=express();

const dotenv=require("dotenv");
const mongoose=require("mongoose");
//indicate my router 
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
app.use(cors());
//authentication path
dotenv.config();
//this application is able to send the json object
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
});

//to use this api on browser
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

//to listen on some port
app.listen(process.env.PORT, ()=>{
    console.log("Backend is running");
})
