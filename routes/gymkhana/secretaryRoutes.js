const express = require("express");
const secretaryController = require("./../../controllers/gymkhana/secretaryController");

const router = express.Router();

router.route("/").get(secretaryController.getAll);

router.route("/add").get(secretaryController.form);

router.route("/add").post(secretaryController.createSec);

module.exports = router;
