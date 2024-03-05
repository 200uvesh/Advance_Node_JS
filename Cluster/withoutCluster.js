require("dotenv").config()
const  express = require("express")
const app = express()
// simple without using Cluster


app.get("/" , (req , res)=>{
    res.send(`This is Home Page`)
})

app.get("/slow-page" , (req , res)=>{
    let total =0
    for(let i=0; i<100000000; i++){
        // Code to be executed Which is highly CPU intensive
        total++

    }
    res.send(`Slow page sucessfully  Executed! ${total}`)

})



const PORT = process.env.PORT
 app.listen(PORT , (req , res)=>{
    console.log(` Server is Started at http://localhost:${PORT}`)
 })
