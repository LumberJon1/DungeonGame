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
            // console.log("Pushing "+combatant.name+" to initiativeArray...");
            initiativeArray.push([combatant.name, combatant.rollInitiative()]);
        });
        console.log("\nInitiative array with combatants loaded: "+initiativeArray);

        // Order the array by initiative
        let sortedArray = [];
        // Checks initiative scores from 0 - 30, accounting for potential bonuses, and adds
        // to a sorted array variable, which will then be used to replace initiativeArray's values.
        for (let i = 30; i > 0; i--) {
            initiativeArray.forEach((element) => {
                if (element[1] === i) {
                    sortedArray.push(element);
                }
            })
        }

        // Replace initiativeArray with sortedArray
        initiativeArray.splice(0, initiativeArray.length, ...sortedArray);
    }


    removeCombatant() {
        // Code here
    }


    addCombatant() {
        // Code here
    }


    monsterTurn() {
        // Code here
    }

    
    playerTurn() {
        // Code here
    }


    endCombat() {
        // Code here
    }


}

module.exports = Combat;