const express = require('express');
const { getAll } = require('./../../controllers/gymkhana/senateController');

const router = express.Router()


router.route('/').get(getAll);
module.exports = router;