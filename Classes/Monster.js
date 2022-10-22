class Monster extends Character {

    // Constructor
    constructor (name="Monster") {
        // Invoke super to reference this extended subclass
        super(name);

        // Unique values
        this.xpValue = 25;
        this.challenge = 1;

    }

    // Methods

    dropItems() {
        return this.items;
    }
}

// Testbed
const monster = new Monster();
monster.attack();

module.exports = Monster;