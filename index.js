import express from "express";
import TaskRoutes from "./Routes/TaskRoutes.js";
import  Connection  from "./connection.js"
const app = express();
app.use(express.json());

app.use('/api' ,TaskRoutes)

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})