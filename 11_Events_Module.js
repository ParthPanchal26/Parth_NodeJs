/* Event Module
   -> The Event Module allows us to work with events in Node.js.
   -> An event is an action or an occurence that has happened in our application that we can respond to.
   -> Using events module, we can dispatch our own custome events and respond to those custome events in a non blocing manner.
*/

const eventEmitter = require('node:events');
// The Event module returns a class called event emitter which encapsulates functionality to emit events and respond to event.

const emitter = new eventEmitter();
// Using this emitter object we can emit events.

emitter.on("orderPizza", (size, toping) => {
    console.log(`Order received! Backing ${size} pizza with ${toping}`);
});

// You can register multiple listeners to same event;
emitter.on("orderPizza", (size) => {
    if(size == "large") {
        console.log("Serving complimentary drink");
    }
});

// To emit an event we use the emit method.
emitter.emit("orderPizza", "large", "mushroom");
// To respond to this event we need to register a listener, for that we use the on() method.