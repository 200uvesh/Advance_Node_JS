const {parentPort , workerData} =  require("worker_threads")
console.log(workerData.totalValue)

//CPU intensive task(function)
function IntensiveTask (timeInSecond){
    const end = Date.now() + timeInSecond;
    while (Date.now() < end) { 
        // Any code CPU intensive logic   
    }
    console.log("Executed in the worker thread")
  }

  // post a message to Main thread
parentPort.postMessage(IntensiveTask(workerData.totalValue))
 