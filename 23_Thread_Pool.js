/* Libuv's Thread pool
    -> Thread pool plays it role in the async non-blocking nature of nodeJs.

*/

// let's use crypto module to implement Thread pool.
const crypto = require('node:crypto');
// It provide cryptographic functionality and similar to fs module it does use libuv's thread pool for some of its methods. We will use the only one method name pbkdf2.

// pbkdf2 -> Password Based Key Derivation Function 2.
// This method is one of the most popular method to hash Passwords before storing.

// Let's first measures the time taken to run the synchronous version of pbkdf2.
// const start = Date.now();
// crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

// ----------------------------------------------------------------------------------
// const MAX_CELLS = 5;

// const start = Date.now();
// for(i = 0; i < MAX_CELLS; i++) {
//     crypto.pbkdf2("Password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     });
// }

/* By default the thread pool has only 4 threads */

// ----------------------------------------------------------------------------------
// Let's Increase threads number.
// process.env.UV_THREADPOOL_SIZE = 5;
// process.env.UV_THREADPOOL_SIZE = 5; // This will not change amount of time for 5th thread because my laptop's CPU have only 4 cores.
// const MAX_CELLS = 5;

// const start = Date.now();
// for(let i = 0; i < MAX_CELLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     });
// }

/* Libuv's thread pool helps to execute some of the async methods*/
// ----------------------------------------------------------------------------------
// const https = require("node:https");
// const MAX_CALLS = 10;
// const start = Date.now();   
// for(let i = 0; i < MAX_CALLS; i++) {
//     https.request("https://google.com", (res) => {
//         res.on("data", () => {});
//         res.on("end", () => {
//             console.log(`Request : ${i + 1}`, Date.now() - start);
//         })
//     }).end()
// }