//express server
const express=require("express");
const app=express()
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
//authentication path

dotenv.config();
//this application is able to send the json object
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000", ()=>{
    console.log("Backend is running");
})