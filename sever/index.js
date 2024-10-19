import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
import route from "./routes/AuthRoutes.js";

dotenv.config()
const app=express()
app.use(cors({
    origin:[process.env.ORIGIN],
    // methods:["GET", "POST", "PUT", ]
    credentials:true,
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', route)

const port= process.env.PORT

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("Database is connected");})
.catch((err)=>{
    console.log(err);
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`, );
})
