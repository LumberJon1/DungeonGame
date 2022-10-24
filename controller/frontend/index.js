const router = require("express").Router();

const homeRoutes = require("./homepage-routes.js");

router.use("/home", homeRoutes);

module.exports = router;