import axios from "axios";
import express from "express";
import cors from 'cors'

const PORT = 4000;
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',async(req,res)=>{
    try {
        const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})