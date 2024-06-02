class superHero {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }
}

// code:1
// module.exports = new superHero('Batman');
// code:2
module.exports = superHero;