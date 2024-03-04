const fs = require("fs")


// First Change the letter in uppercase and  Write in output file 

//Step1 : Create readStream
const readStream1 = fs.createReadStream("sample.txt")
//step2 : Create writeStream
const writeStream = fs.createWriteStream("output1.txt")

readStream1.on("data" , (chunk)=>{
    console.log("Data received : " , chunk)
    //to change the uppercase 
    const finalStream = chunk.toString().toUpperCase()
    //to save ina new file 
    writeStream.write(finalStream)

})






// 1> readable Stream
const {Readable} = require("stream")

 const readFiles = new Readable(
    {
        read(){}
    }
   
 )

 readFiles.on("data" , (chunk)=>{
    console.log(`Data Comming ${chunk}`)
 })

 readFiles.push("Hello From the Readable custom File")





 





// 2> writable Stream
const {Writable} = require("stream")

const writableFiles = new Writable(
    {
        write(s){
            console.log(`Writing  ${s}`)
        }
    }
)









//  3> transform Stream
// const {Transform} = require("stream")
