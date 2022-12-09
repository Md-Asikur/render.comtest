const express = require("express")
const app=express()
app.get("/",(req,res)=>{
    res.json({message:"wow User online now!"})
})
console.log(07)
app.listen(5000,(req,res)=>{
    console.log("server listening")
})