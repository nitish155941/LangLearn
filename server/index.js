import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import { createServer } from "http";

const app=express();
const httpServer = createServer(app);

app.use(express.json());
app.use(cors());

app.use('/api/auth',userRoutes);
app.use('/api/quiz',quizRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/codebyte",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("DataBase Connection Succesful"))

app.listen(process.env.PORT,()=>{
    console.log('Server started on Port '+process.env.PORT);
})

