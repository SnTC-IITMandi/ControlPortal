const express = require('express');
const { getAll } = require('./../../controllers/gymkhana/societiesController');

const router = express.Router();

router.route('/').get(getAll);
module.exports = router;
