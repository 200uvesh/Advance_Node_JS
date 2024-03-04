require("dotenv").config()
const server = require("express")
const app = server()



//Streams
// const stream = require("stream")
// const fs = require("fs")




//Routes
app.get("/" , (req , res)=>{
    res.send("Hii I am from HomePage")
})




// Listners
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)

}
)




 
