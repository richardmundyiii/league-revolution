const express = require("express");
const router = express.Router();
const seasonCtrl = require("../../controllers/seasons");

router.get("/", seasonCtrl.index);

router.post("/", seasonCtrl.create);

module.exports = router;
