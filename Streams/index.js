require("dotenv").config()
const server = require("express")
const app = server()



//Streams
const fs = require("fs")
const status = require("express-status-monitor")




//middlieware
app.use(status())

//Routes

//Home Route
app.get("/" , (req , res)=>{
    res.send("Hii I am from HomePage")
})

// Data Route (Without Stream)
app.get("/data" , (req , res)=>{
    fs.readFile("./sample.txt" , (err , data)=>{
        res.end(data)
    })
    
})



// Data Route (Witt the help of Stream)
app.get("/dataStream" , (req , res)=>{
    const stream = fs.createReadStream("./sample.txt" , "utf-8")
    stream.on("data" , (chunk)=>{
        res.write(chunk)
    })
    stream.on("end" , ()=>{
        res.end()
    })


})


// Create a function for converting a file into Zip with using Streams
const zipMaker = function(){
    const zlib = require("zlib")
    console.log("me yha hu")
fs.createReadStream("./sample.txt").pipe(
    zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
)

}

// zipMaker()
 


 




// Listners
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)

}
)




 
