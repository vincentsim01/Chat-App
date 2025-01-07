import express from "express";
import authRoutes from "./routes/auth.route.js"
const app = express(); 

app.use("api/auth", authRoutes)

app.get('/', (req, res) => {
    res.send("GET Request Called")
})
app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
})