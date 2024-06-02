// Local Modules -> Modules that we create and use in our applications.

// require('./03_localModules_2.js'); 
// We will always pass Path as string in single or double quotes.
// When Code will Execute the require function will load the path, in our case code.

const add = require('./03_localModules_2');
console.log(`File Name : 03_localModules_1`);

const sum = add(1, 2);
console.log(`1 + 2 = ${sum}`);
const sum2 = add(3, 2);
console.log(`3 + 2 = ${sum2}`);

// To Execute 03_localModules_2.js File here also, We need CommonJs Module Format.

/* Common JS 
   -> CommonJs is a standard that states how a module should be stuctured and shared.
*/

// To use 03_localModules_2.js in 03_localModules_1.js, we need to use a function that is always available in Node, that is "require()" function, Let's call it at the Top.

/* --------------------------------------------- */ 
/* Module Export 
   => Well, using the require function works well but its always better to reuse block of code is to expose certain functionallity that can be consume by external files, we can do that by using the special module.exports object that is always available in Node.js.
   
   => Let's assign 03_localModules_2.js's add function to module.exports.*/