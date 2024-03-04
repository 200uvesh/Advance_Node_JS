require("dotenv").config()
const server = require("express")
const app = server()

// Something went wrong 

// const clust = require("cluster")
// if(clust.isMaster){
//     console.log(clust.fork())
// }
 

app.get("/" , (req , res)=>{
    res.send(`Hii I am from Server ${process.pid}`)
})
const PORT = process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)

})

