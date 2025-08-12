
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import dotenv from "dotenv";

dotenv.config(); //envirornment folder file eka load kireema memagin siduwe..
  

let app = express()

app.use(bodyParser.json());
app.use((req,res,next) =>{
   const token = req.header
   console.log(token)

})

let mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl) 
 
const connection = mongoose.connection

connection.once("open", () => {
    console.log("MongoDB connection established successfully")
})



app.use("/api/users" , userRouter)  //memagin request ywnna ona nishchitha address ekta ywai..
app.use("/api/products",productRouter)

app.listen(3000, () => {
    console.log("server is running on port 3000")
});   