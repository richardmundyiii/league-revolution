const express = require("express");
const router = express.Router();
const divCtrl = require("../../controllers/divisions");

router.get("/:seasonId/divisions", divCtrl.index);

router.post("/", divCtrl.createDivision);

module.exports = router;
