const express = require("express");
const controler = require("../../../controllers/userCtrl");

const router = express.Router();

router.post("/auth/login", controler.login);
router.post("/auth/current", controler.currentUserInfo);

module.exports = router;
