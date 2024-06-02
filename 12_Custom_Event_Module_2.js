const pizzaOrder = require('./12_Custom_Event_Module_1');
const DrinkMachine = require('./12_Custom_Event_Module_3');

const pizzaShop = new pizzaOrder();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topings) => {
    console.log(`Order received! Backing ${size} pizza with ${topings}`);
    drinkMachine.serveDrink(size);
})

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();