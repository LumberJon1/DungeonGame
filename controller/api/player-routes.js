const router = require("express").Router();
const { where } = require("../../../Module 18/Social-Butterfly/models/Thought");
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
    Player.update({...req.body}, {
        where: {
            id: req.params.id
        }
    })
    .then(
        updatedPlayerData => res.json(updatedPlayerData)
    )
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// DELETE route for player

// Inventory Routes...

// GET route for user inventory data
router.get("/:id/inventory", (req, res) => {
    let items = testPlayer.items;
    let weapons = testPlayer.weapons;
    let armor = testPlayer.armor;

    res.json(items, weapons, armor)
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// PUT route for player inventory
router.put("/:id/inventory", (req, res) => {
    let itemData = {...req.body};
    console.log(itemData);
    
    res.json(itemData);
});

// DELETE route for inventory


module.exports = router;