class Character {

    // Constructor
    constructor(name="Character") {
        this.name = name;
        this.ac = 10;
        this.dmgDice = 6;
        this.numDice = 1;
        this.attackBonus = 0;
        this.hp = 10;
        this.items = [];
        this.dead = false;
        this.initiative = 20;
        this.initiativeBonus = 0;
        this.characterType = "Monster";
        // this.move = 3;
    }

    // Methods
    decrementHP(damage) {
        this.hp -= damage;

        // Check if dead
        if (this.hp <= 0) {
            this.dead = true;
        }
    }

    incrementHP(amount) {
        this.hp += amount;
    }

    checkHit(attackRoll) {
        if (attackRoll >= this.ac) {
            return true;
        }
        else {
            return false;
        }
    }

    rollInitiative() {
        let roll = Math.floor(Math.random() * this.initiative) + 1;
        roll += this.initiativeBonus;
        console.log(this.name+" rolled a "+(roll+this.initiativeBonus)+" for initiative.");
        return roll;
    }

    attack() {
        // Total value starts at 0 and gets incremented by the value of each roll
        let total = 0;

        // Roll once per numDice
        for (let i = 0; i < this.numDice; i++) {
            let roll = Math.floor(Math.random() * 20) + 1;
            console.log("\nRolled a "+roll+" to hit target.");
            // Apply any bonuses
            roll += this.attackBonus;
            total += roll;
        }

        return total;
    }

}

module.exports = Character;