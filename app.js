import express from "express";

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello I am from Node AWS Account!!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})