const {Worker} = require("worker_threads")
 
const totalValue = 100000 
const worker = new Worker("./worker.js" , {workerData:{totalValue}}
)

worker.once("message" , (msg)=>{
    console.log(msg)
})

//Listners
 worker.on("exit" ,(exit)=>{
    console.log(exit)
    console.log("Executed in the main thread")
 })


