const Character = require("./Character.js");
const Monster = require("./Monster.js");
const Player = require("./Player.js");
const Weapon = require("./Weapon.js");
const Armor = require("./Armor.js");

class Combat {

    // Constructor
    constructor(combatants) {
        // Takes an array of combatants(Character subclasses) and loops through each,
        // prompting for actions

        // For now, this will only be attacks, but can later include running or using items.
        this.combatants = combatants;
    }

    // Methods
    setInitiative() {
        // Takes integers as arguments from each combatant and reorders the combatants array

        // Define initiative array
        let initiativeArray = [];

        // Grab each combatant's index and initiative score, and push to the array
        this.combatants.forEach((combatant) => {
            initiativeArray.push([this.combatants.indexOf(combatant), combatant.rollInitiative()]);
        });

        // Order the array by initiative
        initiativeArray.sort().reverse();
    }


}

module.exports = Combat;