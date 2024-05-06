import axios from "axios";
import express from "express";
import cors from 'cors'

const PORT = 4000;
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    const data = axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log("data",data)
    res.send("lele bhaii data",data);
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})