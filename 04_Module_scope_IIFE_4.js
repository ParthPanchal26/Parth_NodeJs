// Let's define two IIFEs.
/* 
    step 1: function() {} => Define common function,
    step 2: (function() {}) => Wrap it with parentheses to convert into a function expression.
    step 3: (function() {}) () => Add parentheses at the end to immediately invoke it.
    step 4: (function() { 
                Now you can write your code here
            }) ();

    => With IIFEs, each function gets its own private scope.

    => Under the hood Node.js as well uses this pattern.


    Immediately Invoke Function Expression (IIFE) in Node.js:

    -> Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope.

    -> This saves us from having to worry about conflicting variables and functions.

    -> There is proper encapsulation and reusability is unaffected.
*/

(function() {
    const superhero = 'batman';
    console.log(superhero);
}) ();

(function() {
    const superhero = 'superman';
    console.log(superhero);
}) ();


/* Summary:

   -> Each loaded module in Node.js is wrapped with the IIFE that provides private scoping of code.

   -> IIFE allows you to repeat variable or function names without any conflicts.
*/

/* Note: 
    (function(exports, require, module, __filename, __dirname) {
        const superhero = 'batman';
        console.log(superhero);
    }) ();


   -> Keep in mind before module code executed Node.js will wrap it with a function that contains 5 parameters,
   1.exports,
   2.require,
   3.module,
   4.__filename,
   5.__dirname

   -> These are available to use in every module.
*/