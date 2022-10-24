const router = require("express").Router();

const playerRoutes = require("./player-routes.js");

router.use("/player", playerRoutes);

module.exports = router;