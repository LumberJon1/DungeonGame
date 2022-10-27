const Character = require("./Character");

class Player extends Character{

    // Constructor
    constructor(name) {

        // Invoke super
        super(name);

        // Overwrite the default "Monster" characterType attribute
        this.characterType = "Player";

        // Unique attributes...
        // Ability Scores
        this.strength = 10;
        this.intelligence = 10;
        this.wisdom = 10;
        this.dexterity = 10;
        this.constitution = 10;
        this.charisma = 10;

        // Bonuses
        this.acBonus = 0;
        this.hpBonus = 0;

        // Level and Class Info
        this.level = 1;
        this.xp = 0;
        this.nfnl = 100;

        // Armor and weapons
        this.armor = [];
        this.weapons = [];
        this.weaponEquipped = "";
        this.armorEquipped = "";

        // Money
        this.copper = 0;
        this.silver = 0;
        this.gold = 0;

        // Statistics, for funzies
        this.monstersDefeated = 0;
        this.highestLvlMonster = 0;
        this.totalDmgTaken = 0;
        this.hitRatio = 0;
        this.moneyAccrued = 0;
        this.encounters = 0;
        this.distanceTraveled = 0;

    }

    // Unique Methods
    gainXP(amount) {
        this.xp += amount;
    }

    checkLevelUp() {
        if (this.xp >= this.nfnl) {
            this.level += 1;
            this.nfnl += (nfnl * 1.25);
        }
    }
    
    evaluateDamage() {
        this.attackDice = this.weaponEquipped.dmgDice;
        this.numDice = this.weaponEquipped.numDice;
    }

    evaluateAC() {
        this.ac = 10 + this.armorEquipped.acBonus + this.acBonus;
    }

    equipWeapon(weapon) {
        this.weaponEquipped = weapon;
        this.evaluateDamage();
    }

    equipArmor(armor) {
        this.armorEquipped = armor;
        this.evaluateAC();
    }

    addMoney(type, amount) {
        if (type === "copper") {
            this.copper += amount;
        }
        else if (type === "silver") {
            this.silver += amount;
        }
        else {
            this.gold += amount;
        }
    }

    selectName(nameInput) {
        this.name = nameInput;
    }

}

module.exports = Player;