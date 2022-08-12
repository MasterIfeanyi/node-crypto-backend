const express = require("express");
const router = express.Router();
const {getCryptos} = require("../../controllers/cryptoController")

router.get("/getCryptos", getCryptos);

module.exports = router;