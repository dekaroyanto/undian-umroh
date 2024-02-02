const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const UserController = require("../controllers/user.controller");

router.get("/getCustomer", authenticateToken, UserController.getCustomer);
router.post("/register", UserController.register);
// router.post("/viewUpdate", UserController.viewUpdate);
router.post("/update", UserController.update);
// router.post("/newMember", UserController.newMember);
router.post("/login", UserController.login);
router.put("/destroy", UserController.destroy);

module.exports = router;
