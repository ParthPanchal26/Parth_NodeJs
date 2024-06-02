/* Callbacks
   -> In JS, Functions are first class objects.
   -> A function can be passes as an argument to a function.
   -> A function can also be returned as values from other functions.
*/

function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = `Parth`;
    callback(name)
}

higherOrderFunction(greet);

/* -> Here higherOrderFunction is a function that accepts another function as argument.
   -> Any function that is passed as an argument to another function called callback function in JS.
   -> A function which accepts a function as its argument called Higher Order function

   Why callback function?
   -> We can answer that by categorizing callbacks into two,
        - Synchronous Callbacks
        - Asynchronous callbacks
   
   => Synchronous callbacka:
    -> A callback which is executed immediately is called Synchronous callback.
   => Asynchronous callback:
    -> A callback which is often used to continue or resume code execution after an Asynchronous operation has completed.
    -> callbacks are used to delay the execution of a function until a particular time or event has occured.
    -> Node.js have an Asynchronous nature to prevent blocking of execution.
    -> Ex; reading data from a file, fetching data from DB, or handeling a network request.

    function callback() {
        document.getElementById('demo').innerHTML = "Hello World!";
    }
    document.getElementById('btn').addEventListener('click', callback);

    -> In this example the callback() will not execute until user does not click on button or we can say callback() delayed for click event.
*/