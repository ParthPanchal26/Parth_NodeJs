/* This is the import pattern for first two exports

    const add = require('./06_Import_Export_Patterns_1');
    console.log(add(2, 3)); 
*/

/* This is import for 3rd and 4th export

    const addSub = require('./06_Import_Export_Patterns_1');
 
    console.log(addSub.add(2, 3));
    console.log(addSub.subtract(3,2));

    // We can destructure the function from the object .
    const {add, subtract} = addSub;

    console.log(add(2, 3));
    console.log(subtract(3, 2));
    
*/

