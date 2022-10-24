const router = require("express").Router();

// Get route for homepage
router.get("/", (req, res) => {
    res.sendFile("../../public/index.html");
})

module.exports = router;