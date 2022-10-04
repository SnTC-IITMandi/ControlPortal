const express = require('express');
const { getAll } = require('./../../controllers/gymkhana/secretaryController');

const router = express.Router()


router.route('/').get(getAll);
module.exports = router;