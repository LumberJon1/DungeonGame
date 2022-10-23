const Combat = require("../../Classes/Combat");
const Character = require("../../Classes/Character");
const Monster = require("../../Classes/Monster");
const Player = require("../../Classes/Player");

const goblin = new Monster("goblin");
const goblin2 = new Monster("goblin2");
const goblin3 = new Monster("goblin3");
const player = new Player("Inigo Montoya");

let combat = new Combat([player, goblin, goblin2, goblin3]);

// Initiate combat
combat.setInitiative();


