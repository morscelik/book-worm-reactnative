//const express = require("express")

import express from "express";
import "dotenv/config"
import authRoutes from "../src/routes/authRoutes.js"
import { connectDB } from "./lib/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from 'cors'

const app = express();
app.use(express.json())
const PORT = process.env.PORT;
app.use(cors())


app.use("/api/auth", authRoutes)
app.use("/api/books", bookRoutes)


app.listen(PORT, ()=> {
    console.log("Server is running on port : ", PORT);
    connectDB();
})