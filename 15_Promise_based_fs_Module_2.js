/* Promises based fs module */
const fs = require("node:fs/promises");
console.log("first");
async function readFile() {
    try {
        const data = await fs.readFile("15_greet.txt", "UTF-8");
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}

console.log("second");
readFile();

// fs.readFile("15_greet.txt", "UTF-8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))