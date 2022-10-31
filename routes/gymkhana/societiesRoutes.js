const express = require('express');
const { getAll } = require('./../../controllers/gymkhana/societiesController');
const societiesController = require("./../../controllers/gymkhana/societiesController");


const router = express.Router();

router.route('/').get(getAll);
router.route("/add").get(societiesController.form);
router.route("/add").post(societiesController.addSociety);

module.exports = router;