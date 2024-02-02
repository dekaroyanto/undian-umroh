const express = require("express");
const router = express.Router();

const history = require("../controllers/historyTrans.controller");
const authenticateToken = require("../middleware/auth");

router.get("/getHistory", authenticateToken, history.getHistory);

module.exports = router;
