/* Streams
   -> A Stream is a sequence of data that is being moved from one point to another over time.
   -> Ex: A Stream of data over the internet being moved from one computer to another computer OR A Stream of data being transfered from one file to another within the same computer.
   -> In NodeJs the idea is to process Stream of data in chunks as they arrive instead of waiting for the entire data to be avilable before processing.
   -> Ex: On youtube we don't wait for video to be downloaded to watch it. Data arrive in chunks and you watch in chunks while the rest of data arrives over time.
   -> Ex: If you transfering file A to file B you don't wait for the entire file A content to be saved in temporary memory before moving it into file B. The content arrive in chinks and you transfer in chunks while the remaining contents arrive over time.
   -> Also you preventing unnecessary data downloads and memory usage.
   -> Stream in fect a built in module that inherits from the event emitter class.
*/

const fs = require('node:fs');

const readableStream = fs.createReadStream('./15_file.txt', {
   encoding: 'UTF-8',
   highWaterMark: 2,
});

const writeableStream = fs.createWriteStream('./15_greet.txt');


readableStream.on("data", (chunk) => {
   console.log(chunk);
   writeableStream.write(chunk)
})