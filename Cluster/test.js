var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} 

// if(cluster.isMaster){

// }

else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
 cluster.fork()
 
} 