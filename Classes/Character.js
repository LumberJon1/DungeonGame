class Character {

    // Constructor
    constructor(name="Character") {
        this.name = name;
        this.ac = 10;
        this.attackDice = 6;
        this.numDice = 1;
        this.attackBonus = 0;
        this.hp = 10;
        this.items = [];
        this.dead = false;
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

    attack() {
        // Total value starts at 0 and gets incremented by the value of each roll
        let total = 0;

        // Roll once per numDice
        for (let i = 0; i < this.numDice; i++) {
            let roll = Math.floor(Math.random() * this.attackDice) + 1;
            console.log("Rolled "+roll);
            // Apply any bonuses
            roll += this.attackBonus;
            total += roll;
        }

        return total;
    }

}