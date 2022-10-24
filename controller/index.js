const router = require("express").Router();

const apiRoutes = require("./api");
const frontEndRoutes = require("./frontend");

router.use("/api", apiRoutes);
router.use("/", frontEndRoutes);

// Handle bad requests
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;