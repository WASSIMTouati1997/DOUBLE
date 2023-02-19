const express = require("express")
const cors =require("cors")
const port = 4557
const app =express()
const {DoseRouter}=require("./serveur/router/postrouter")


app.use(express.json())
app.use(cors())

app.use("/",DoseRouter)
app.listen(port,(error)=>{
    error?console.log(error) : console.log(`serveur is runing http://localhost:${port}`)
})