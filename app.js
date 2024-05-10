import axios from "axios";
import express from "express";
import cors from 'cors'
import path from 'path'

const PORT = 4000;
const app = express();
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve('./public')))

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})