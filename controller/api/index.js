const router = require("express").Router();

const playerRoutes = require("./player-routes.js");

router.use("/players", playerRoutes);

module.exports = router;