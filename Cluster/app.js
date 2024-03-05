require("dotenv").config()
const cluster = require("cluster")
const os = require("os")
const express = require("express")

const totalCPU = os.cpus().length
// console.log(totalCPU)


if(cluster.isMaster){
    for(let i=0 ; i<totalCPU;i++){
        const fork = cluster.fork()
        console.log(fork)
        console.log(`Master process ${process.pid} is running`)
    }
}
else{
    const app = express()
    const PORT = process.env.PORT
    app.get("/" , (req , res)=>{
        res.send(`Hello from express server ${process.pid}`)
    })
  app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT} and process id is ${process.pid}`)
  })

}


const obj =
{
                  

}


 