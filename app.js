import express from "express";

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>{
    res.send("Haa jii Or CI/CD implement kr diya") 
    // res.send("haa lelo meri!!") 
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})