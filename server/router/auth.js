const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("We are using Router!");
});

module.exports = router;