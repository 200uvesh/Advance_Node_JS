require("dotenv").config()
const  express = require("express")
// const app = express()
 




// simple with using Cluster
const cluster = require("cluster")
const os = require("os")
const express = require("express")

const totalCPU = os.cpus().length
console.log(totalCPU)



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

 app.get("/slow-page" , (req , res)=>{
    let total =0
    for(let i=0; i<100000000; i++){
        // Code to be executed
        total++

    }
    res.send(`Slow page sucessfully  Executed! ${total}`)

    })
  app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT} and process id is ${process.pid}`)
  })

}