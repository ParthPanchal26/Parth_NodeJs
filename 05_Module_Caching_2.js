// code:1
// const superHero = require('./05_Module_Caching_1');

// console.log(superHero.getName());
// superHero.setName('superman');
// console.log(superHero.getName());

// const newHero = require('./05_Module_Caching_1');
// console.log(newHero.getName()); // OutPut : superman

/* Why we received superman agian instead of batman? 
   -> This is concept of module caching.
   -> In Node.js when we require a new module it is loaded and cached for subsequent loading.
   -> In our case superHero module is loaded and cached.
   -> Cachec is just a fancy word to remember.
   -> So the next time when we require same module, Node.js will think that this module already been loaded before, so let reuse that insteadof doing the same additional work of loading it brand new!
   
   Now you may have a question the what to do in scenarios where we need to create saparate instances of superHero?
   => Well, It is simple just export class instead of instance.
*/
// code:2
const superhero = require('./05_Module_Caching_1');

const hero = new superhero('IronMan')
console.log(hero.getName());
hero.setName('CaptainAmerica');
console.log(hero.getName());

const newHero = new superhero('SpiderMan');
console.log(newHero.getName());