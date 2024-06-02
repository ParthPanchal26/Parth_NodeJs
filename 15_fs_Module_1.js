/* fs Module.
   -> The file system (fs) module allows you to work with the file system on your computer.
   ->
*/

const fs = require('node:fs');

console.log("first"); // To test Asynchrounous code

// Synchrounous code
const file = fs.readFileSync('./15_file.txt', 'UTF-8');
console.log(file);

console.log("second"); // To test Asynchrounous code

// Asynchrounous code
fs.readFile("./15_file.txt", "UTF-8", (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
});

console.log("Third"); // To test Asynchrounous code

/* To make and write into file. */
// Synchrounous code
fs.writeFileSync("./15_greet.txt", "Hello There, This file is for testing 15_fs_Module.js");

// Asynchrounous code
fs.writeFile("./15_greet.txt", ", Another text", {flag: 'a'}, (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
})

