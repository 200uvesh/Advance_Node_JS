const {Worker} = require("worker_threads")
 
const totalValue = 1000
const worker = new Worker("./worker.js" , {workerData:{totalValue}}
)

worker.once("message" , (msg)=>{
    console.log("This is a message : " , msg)
})

//Listners
 worker.on("exit" ,(exit)=>{
    console.log(exit)
    console.log("Executed in the main thread")
 })


