import express from "express";
import Connection from "./db/conn.js";
import dotenv from "dotenv"
const app = express();
import cors from "cors"
import foodRouter from "./routes/foodRoutes.js";

dotenv.config()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8000;


Connection();

app.use("/api/foods", foodRouter);
app.listen(PORT, () => {
    console.log("Listening on port 8000");
    
})