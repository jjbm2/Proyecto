import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
mongoose.connect(process.env.urlbd)
    .then(() => {
        console.log("MongoDB connected")})
    .catch((err) => {
        console.log("MongoDB connection error:", err)});

    const app = express();
    app.use(cors());
    app.listen(4000, () => {
        console.log("Server is running on port 4000");
    })


