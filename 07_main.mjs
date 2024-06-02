// import math from "./07_math-esm.mjs";

// const {add, sub} = math;

// console.log(add(5, 5));
// console.log(sub(5, 5));

import {add, sub} from "./07_math-esm.mjs";


console.log(add(5, 5));
console.log(sub(5, 5));

/* EsModule summary
   -> ES modules is the EcmaScript standard for modules.
   -> It was introduced with ES2015.
   -> Node.js 14 and above support ES modules.
   -> Instead of module.exports we use just export keyword.
   -> The export can be default or named.
   -> We import the exported variables or functions using the import keyword.
   -> If it is default export, we can assign any name while importing.
   -> If it is a named exported, the import name must be the same.
*/