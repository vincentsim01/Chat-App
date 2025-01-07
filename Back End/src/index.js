import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv ";
const app = express(); 

app.use("api/auth", authRoutes)

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("GET Request Called")
})
app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
})