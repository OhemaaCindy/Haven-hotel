import express, {type  Request,type Response } from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", async(req:Request, res:Response) => {
  res.json({message:"Hello Cindy"});
});


app.listen(7000, () => {
  console.log(`Server running on http://localhost:7000`);
});
