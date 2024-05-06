import express from "express";

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Neeraj Sir Gaad Doge!,haa lelo meri!!") 
    // res.send("haa lelo meri!!") 
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})