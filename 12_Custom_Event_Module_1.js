const eventEmitter = require('node:events');

class pizzaOrder extends eventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topings) {
        this.orderNumber++;
        this.emit("order", size, topings);
    }

    displayOrderNumber() {
        console.log(`Current order Number: ${this.orderNumber}`);
    }
}

module.exports = pizzaOrder;