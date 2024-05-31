const express = require("express");
const router = express.Router();
const playerCtrl = require("../../controllers/players");

router.get("/:teamId", playerCtrl.index);

router.post("/", playerCtrl.createPlayer);

module.exports = router;
