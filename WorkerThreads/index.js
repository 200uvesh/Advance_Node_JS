// Basics of Worker Thread
const  {Worker , isMainThread , parentPort} = require("worker_threads")
console.log(isMainThread) // return True or False


//CPU Intensive Task
 function IntensiveTask (timeInSecond){
        const end = Date.now() + timeInSecond;
        while (Date.now() < end) { 
            // Any code which is CPU intensive code
        }
      }



if(isMainThread){
    console.log("main thread started")
    // Creating worker thread
    const worker = new Worker(__filename)
    // To find the current file_name and directory_name 
    console.log(__filename)
    console.log(__dirname)

    // Event handler
    worker.on( "message" ,(msg)=>{
        console.log(`Worker: ${msg}`)

    })
    console.log("doing some random work in main thread..!!");
}


else{
    //Event Emmiter
    parentPort.postMessage("Hello From Worker Thread")
    IntensiveTask(1000)
    parentPort.postMessage("I am working on something")
    IntensiveTask(1000)
    parentPort.postMessage(" I have completed my task")


}




