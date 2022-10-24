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
        this.combatants = combatants;
        this.initiativeArray = [];
        this.currentTurn = 0;
    }

    // Methods
    setInitiative() {
        // Takes integers as arguments from each combatant and reorders the combatants array

        // Grab each combatant's index and initiative score, and push to the array
        this.combatants.forEach((combatant) => {
            // console.log("Pushing "+combatant.name+" to initiativeArray...");
            this.initiativeArray.push([combatant, combatant.characterType, combatant.rollInitiative()]);
        });

        // TODO: Destructure the object to print
        console.log("\nInitiative array with combatants loaded: ");
        this.initiativeArray.forEach((element) => {
            console.log(element[0].name, element[1], element[2]);
        })

        // Order the array by initiative
        let sortedArray = [];
        // Checks initiative scores from 0 - 30, accounting for potential bonuses, and adds
        // to a sorted array variable, which will then be used to replace initiativeArray's values.
        for (let i = 30; i > 0; i--) {
            this.initiativeArray.forEach((element) => {
                if (element[2] === i) {
                    sortedArray.push(element);
                }
            })
        }

        // Replace initiativeArray with sortedArray
        this.initiativeArray.splice(0, this.initiativeArray.length, ...sortedArray);

        this.startTurn();
    }


    removeCombatant() {
        // Code here
    }


    addCombatant() {
        // Code here
    }

    progressInitiative() {
        // Progresses 
    }

    startTurn() {

        // First check that there are still at least 2 combatants in the initiativeArray
        if (this.initiativeArray.length < 2) {
            this.endCombat();
        }
        else {
            // Next evaluate whether currentTurn is out of initiativeArray bounds.  If so, return to 0.
            if (this.currentTurn >= this.initiativeArray.length) {
                this.currentTurn = 0;
                // Recursively call startTurn
                this.startTurn();
            }
            else {
                // Conditionally calls either the monster or player turn functions
                if (this.initiativeArray[this.currentTurn][1] === "Player") {
                    this.playerTurn();
                }
                else {
                    this.monsterTurn();
                }
            }
        }
    }


    monsterTurn() {
        // Used when a monster is attacking from the initiativeArray.
        // A monster can only attack.  It has fewer options and no prompts for this reason.
        
        // Define attacking monster and player
        let monster = this.initiativeArray[this.currentTurn][0];
        console.log("\nTaking "+monster.name+"'s turn...")

        let player;

        this.initiativeArray.forEach((combatant) => {
            if (combatant[1] === "Player") {
                player = combatant[0];
            }
        });
        
        // Roll and get the monster's attack result
        let attackRoll = monster.attack();

        // Check hit against the target player
        console.log("\nPlayer's AC: "+player.ac);
        let playerHit = player.checkHit(attackRoll);

        // decrement HP on target player if hit
        if (playerHit === true) {

            // TODO: Add logic to evaluate double damage for critical hits
            console.log("\nHit!");

            // Roll for damage
            let damage = Math.floor(Math.random() * monster.dmgDice) + 1;
            console.log("\nMonster's damage dice: "+monster.dmgDice+". Rolled a "+damage+" for damage!");
            player.decrementHP(damage);
            console.log("Player's new HP: "+player.hp);
        }
        else {
            console.log("\nMissed!")
        }

        // Progress initiative to next combatant in the array
        this.currentTurn++;
        this.startTurn();
    }


    playerTurn() {
        // Code here
        console.log("\nTaking player's turn...");
        let player = this.initiativeArray[this.currentTurn][0];

        // For now console log allowable targets, eventually map these to HTML elements
        const enemies = [];
        enemies.push(this.initiativeArray.slice(0, this.currentTurn))
        enemies.push(this.initiativeArray.slice(this.currentTurn +1, this.initiativeArray.length));

        // TODO: Prompt for choice between attacking, fleeing, or using an item
        
        // if attack, prompt for target selection (For not not conditional)
        console.log("\nChoose from allowable targets to attack: \n"+enemies);

        // else if flee, end combat
        // TODO: Think of a way to disincentivize flight from combat

    }


    endCombat() {
        // Code here
        console.log("\nCombat has ended.");
        // TODO: Assign XP if the player is still alive
    }


}

module.exports = Combat;