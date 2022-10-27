const router = require("express").Router();
const Player = require("../../Classes/Player");

// Mock player to use
const testPlayer = new Player("Test Player");

// Routes will for now serve mock data, but will eventually be linked to a database

// Hook up the Get route for user inventory data
router.get("/inventory", (req, res) => {
    let items = testPlayer.items;
    let weapons = testPlayer.weapons;
    let armor = testPlayer.armor;

    res.json(items, weapons, armor)
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// GET route for player info
router.get("/character", (req, res) => {
    res.json(testPlayer)
    //     .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// POST route to change player info
router.post("/character", (req, res) => {
    let playerData = {...req.body};
    console.log(playerData);

    // Assign each property to the testPlayer
    // testPlayer.characterType = req.body.characterType
    // testPlayer.strength = req.body.strength
    // testPlayer.intelligence = req.body.intelligence
    // testPlayer.wisdom = req.body.wisdom
    // testPlayer.dexterity = req.body.dexterity
    // testPlayer.constitution = req.body.constitution
    // testPlayer.charisma = req.body.charisma
    // testPlayer.acBonus = req.body.acBonus
    // testPlayer.level = req.body.level
    // testPlayer.xp = req.body.xp
    // testPlayer.nfnl = req.body.nfnl
    // testPlayer.armor = req.body.armor
    // testPlayer.weapons = req.body.weapons
    // testPlayer.weaponEquipped = req.body.weaponEquipped
    // testPlayer.armorEquipped = req.body.armorEquipped
    // testPlayer.copper = req.body.copper
    // testPlayer.silver = req.body.silver
    // testPlayer.gold = req.body.gold
    // testPlayer.monstersDefeated = req.body.monstersDefeated
    // testPlayer.highestLvlMonster = req.body.highestLvlMonster
    // testPlayer.totalDmgTaken = req.body.totalDmgTaken
    // testPlayer.hitRatio = req.body.hitRatio
    // testPlayer.moneyAccrued = req.body.moneyAccrued
    // testPlayer.encounters = req.body.encounters
    // testPlayer.distanceTraveled = req.body.distanceTraveled

    res.json(playerData);
});

// POST route for player inventory
router.post("/inventory", (req, res) => {
    let itemData = {...req.body};
    console.log(itemData);

    res.json(itemData);
});


module.exports = router;