/* Streams
   -> A Stream is a sequence of data that is being moved from one point to another over time.
   -> Ex: A Stream of data over the internet being moved from one computer to another computer OR A Stream of data being transfered from one file to another within the same computer.
   -> In NodeJs the idea is to process Stream of data in chunks as they arrive instead of waiting for the entire data to be avilable before processing.
   -> Ex: On youtube we don't wait for video to be downloaded to watch it. Data arrive in chunks and you watch in chunks while the rest of data arrives over time.
   -> Ex: If you transfering file A to file B you don't wait for the entire file A content to be saved in temporary memory before moving it into file B. The content arrive in chinks and you transfer in chunks while the remaining contents arrive over time.
   -> Also you preventing unnecessary data downloads and memory usage.
*/

/* Buffers 
   -> Consider the scenario of an amusement park with roller coster.
   -> The roller coster can accommodate 30 peoples.
   -> But we don't know what pace peoples arrive at the rollor coster.
   -> If 100 peoples arrive at a time 30 accommodate and and remaining 70 wait for the next round.
   -> On the other hand if only one person arrive he or she have to wait for at least 10 peoples to arrive in total and that is guidline set to improve efficiency.
   -> But the bottom line is you can not control pace at which peoples arrive.
   -> You can only deside when is the right time to send peoples on the ride.
   -> If peoples ar already on ride or there are too few peoples to start the ride you have to have peoples arriving wait in line and as it turns out this area where people wait is nothing but a buffer.
   -> NodeJs can not control the pace at which data arrives in the Stream.
   -> It can only deside what is right time to send data for processing.
   -> If there is data already processed or too little data to process, Node puts arriving data in buffer.
   -> It is an intentionally small area that node maintains in the runtime to process a Stream of data.
   -> A familiar ex. where you can see a buffer in action is when you're straming video online.
   -> If your internet connection is fast enough, the speed of the Stream will be fast enough to instantly fill up the buffer and send it out for processing.
   -> That will repeat till the stream is finished.
   -> If Your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for mor data to arrive.
   -> Once the buffer filled up and the data is processed, the video player shows the video.
   -> While the video is playing, more data will continue to arrive and wait in the buffer.
*/

// Let's create a buffer that can hold string "Parth".

const buffer = new Buffer.from("Parth");

console.log(buffer); // This contains raw binary data that is displayed as output when we log to the console but what NodeJs does is print the hexadecimal or base16 notation of the numbers as printing 8 bits binary for every character can flood your terminal 
console.log(buffer.toJSON()); // Each number here is the character unicode character code for the character in the string "Parth", 80 is the number for character 'P'.
console.log(buffer.toString()); // This will return the normal String "Parth".

// You can also write to the buffer.
buffer.write("pathu"); // But this will override the content in buffer, If the length is more than the content length some characters will skipped as they cann't stored in buffer.
console.log(buffer.toJSON());
console.log(buffer.toString());