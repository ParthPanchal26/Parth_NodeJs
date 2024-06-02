/* CommonJS
   => Each file is treated as a module.
   => Variables, functions, classes, etc. are not accessible to other files by default.
   => Explicitely tell the module system whic part of your code should be exported via module.exports or exports
   => To import code into a file use the require() function.

   -> Althrough CommonJS works fine, a new modile system has been added to Node.js, that is EsModule.
*/

/* EsModule
   => Why would we need another option for import/export modules?
   -> At time Node.js was created there was no module system in JavaScript.
   -> Node.js defaulted to CommonJS as its module system.
   -> As of ES2015, JS does not have a standardizes module system as part of the language itself.
   -> That module system called EcmaScript modules or ES modules or ESM for short.

   => Let's create two files main.mjs and math-esm.mjs
*/
