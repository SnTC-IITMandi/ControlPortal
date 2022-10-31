const express = require('express');
const senateController = require('./../../controllers/gymkhana/senateController');

const router = express.Router()


router.route('/').get(senateController.getAll);

router.route("/add").get(senateController.form);
router.route("/add").post(senateController.addSenate);
module.exports = router;