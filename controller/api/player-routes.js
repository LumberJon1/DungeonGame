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

    res.json(playerData);
});

// POST route for player inventory
router.post("/inventory", (req, res) => {
    let itemData = {...req.body};
    console.log(itemData);

    res.json(itemData);
});


module.exports = router;