const router = require("express").Router();
const { Player } = require("../../models");


// GET route for ALL players
router.get("/", (req, res) => {
    Player.findAll()
        .then(dbPlayerInfo => res.json(dbPlayerInfo))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET route for specific player info
router.get("/:id", (req, res) => {
    Player.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlayerData => {
        if (!dbPlayerData) {
            res.status(404).json({message: "No player with this ID ("+req.params.id+")"});
            return;
        }
        else {
            res.json(dbPlayerData);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// POST route to change player info
router.post("/", (req, res) => {

    Player.create({
        name: req.body.name,
        characterType : req.body.characterType,
        strength : req.body.strength,
        intelligence : req.body.intelligence,
        wisdom : req.body.wisdom,
        dexterity : req.body.dexterity,
        constitution : req.body.constitution,
        charisma : req.body.charisma,
        ac: req.body.ac,
        hp: req.body.hp,
        acBonus : req.body.acBonus,
        hpBonus: req.body.hpBonus,
        level : req.body.level,
        xp : req.body.xp,
        nfnl : req.body.nfnl,
        armor : req.body.armor,
        weapons : req.body.weapons,
        money : req.body.money
    })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT route for player
router.put("/:id", (req, res) => {
    // TODO: Create PUT
    console.log("Put");
})

// DELETE route for player

// Inventory Routes...

// GET route for user inventory data
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

// POST route for player inventory
router.post("/inventory", (req, res) => {
    let itemData = {...req.body};
    console.log(itemData);
    
    res.json(itemData);
});

// PUT route for inventory

// DELETE route for inventory


module.exports = router;