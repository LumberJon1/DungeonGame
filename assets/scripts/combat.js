const Combat = require("../../Classes/Combat");
const Monster = require("../../Classes/Monster");
const Player = require("../../Classes/Player");

const goblin = new Monster("goblin");
const player = new Player("Inigo Montoya");

let combat = new Combat([player, goblin]);

// Initiate combat


